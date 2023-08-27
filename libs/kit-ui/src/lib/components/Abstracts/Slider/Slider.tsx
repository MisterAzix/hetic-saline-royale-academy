import {
  CSSProperties,
  Dispatch,
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Axis } from './@types';
import {
  DragState,
  UseDragParams,
  Vector2,
} from '../../../../../hooks/useDrag/@types';
import { useSpring, UseSpringParams } from '../../../../../hooks/useSpring';
import { SliderState } from './hooks/useSliderState';
import { useDrag, useIsMounted, useRefs } from '../../../../../hooks';
import { useInView } from 'react-intersection-observer';
import { useMeasureObserver } from '../../../../../hooks/useMeasureObserver';
import {
  getCopyCount,
  getMultipleOf,
  getShortestDirection,
  transformPxStringToInt,
} from './utils';
import { clamp, wrap } from '../../../../../hooks/useDrag/math';
import { useIsomorphicLayoutEffect } from '../../../../../hooks/useIsomorphicLayoutEffect';
import useSlideIndex from './hooks/useSlideIndex';
import useSliderState from './hooks/useSliderState';
const defaultFriction = 7;

export type SliderProps = Partial<
  {
    /**
     * @description
     * Add a classname on the root node of the slider component */
    className: string;
    /**
     * @description
     * Add a className on the direct slides container */
    containerClassName: string;
    /**
     * @description
     * Add a className when the slides dimension are smaller than the slider total width */
    smallSliderClassName: string;
    /**
     * @description
     * Clamp the slider movement using slide index when snapping.
     * @example To make your slider look like an instagram gallery:
     * `maxSlideIndexChange=1`
     * */
    maxSlideIndexChange: number;
    /**
     * @description
     * If the slider container is larger than all slides combined, slides will be render as a list instead of a slider.
     * If you want to force sliding abilities `autoIsSlider` should be `false`
     * @default `true`
     */
    shouldKeepSlidingAbilities: boolean;
    /**
     * If the slider is out of bounds slide index change will be blocked.
     * Only active on non infinite slider.
     * @default `false`
     */
    autoBlockSlideIndexChange: boolean;
    isInfinite: boolean;
    dragProps: UseDragParams;
    axis: Exclude<Axis, 'free'>;
    shouldSnap: boolean;
    springConfig: UseSpringParams['config'];
    touchSpringConfig: UseSpringParams['config'];
    customSliderRef: RefObject<HTMLElement>;
    excludeMarginFromDefaultBounds: boolean;
    initialSlideIndex: number;
    setSliderState: Dispatch<SetStateAction<SliderState>>;
    onSlideIndexChange: (slideIndex: number) => void;
    autoIsSlider: boolean;
    autoPlay: {
      speed: number;
    };
    style: CSSProperties;
  } & PropsWithChildren
>;

const Slider = forwardRef(
  (
    {
      dragProps,
      axis = 'x',
      shouldSnap,
      setSliderState,
      springConfig = {},
      touchSpringConfig = { friction: 1 },
      excludeMarginFromDefaultBounds = true,
      isInfinite = false,
      className,
      maxSlideIndexChange,
      containerClassName,
      smallSliderClassName,
      children,
      autoIsSlider = true,
      customSliderRef,
      autoBlockSlideIndexChange,
      onSlideIndexChange,
      initialSlideIndex = 0,
      autoPlay = {
        speed: 0,
      },
      style,
    }: SliderProps,
    ref
  ) => {
    const isMounted = useIsMounted();
    const slideIndex = useRef(0);
    const flattenChildren = [children]?.flat?.();
    const length = flattenChildren?.filter?.((child) => child)?.length ?? 0;
    const sliderRef = useRef<HTMLElement>(
      null
    ) as MutableRefObject<HTMLElement>;
    const slidesContainerRef = useRef<HTMLElement>(null);
    const axisToUppercase = axis?.toUpperCase?.();
    const [setInViewRef, isInView] = useInView();

    const setSliderRef = useCallback(
      (node: HTMLElement | null) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(node);
          } else {
            ref.current = node;
          }
        }
        setInViewRef(node);
        node && (sliderRef.current = node);
      },
      [ref, setInViewRef]
    );

    const [margin, setMargin] = useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    });

    const uppercasedAxis = axis.toUpperCase();
    let dimension: 'width' | 'height';
    let position: 'top' | 'left';
    let vectorIndex: 0 | 1;

    if (axis === 'x') {
      vectorIndex = 0;
      dimension = 'width';
      position = 'left';
    } else {
      vectorIndex = 1;
      dimension = 'height';
      position = 'top';
    }

    const slidesContainerDimension = useMeasureObserver(slidesContainerRef);
    const sliderDimension = useMeasureObserver(
      sliderRef,
      'getBoundingClientRect'
    );
    const customSliderDimension = useMeasureObserver(
      customSliderRef,
      'getBoundingClientRect'
    );

    const startOffset = customSliderRef
      ? sliderDimension[position] - customSliderDimension[position]
      : 0;

    const slidesContainerIsLargerThanSlider =
      slidesContainerDimension[dimension] -
        (axis === 'x'
          ? margin.left + margin.right
          : margin.top + margin.bottom) >
      sliderDimension[dimension];

    const shouldBeASlider = slidesContainerIsLargerThanSlider || !autoIsSlider;

    const copyCount =
      isInfinite && shouldBeASlider
        ? getCopyCount(
            customSliderRef
              ? customSliderDimension[dimension]
              : sliderDimension[dimension],
            slidesContainerDimension[dimension]
          )
        : 0;

    const maxSlidesContainersDimension =
      slidesContainerDimension[dimension] * copyCount;

    const slidesContainerCopyRefs = useRefs(copyCount);

    const refs = {
      current: [slidesContainerRef, ...slidesContainerCopyRefs.current],
    };

    const getSlideIndexFromDragOffset = (dragOffset: number) => {
      const preComputedIndex = Math.round(
        (-dragOffset / slidesContainerDimension[dimension]) * length
      );

      const index = isInfinite
        ? wrap(0, length, preComputedIndex)
        : clamp(preComputedIndex, 0, length - 1);

      return slidesContainerDimension[dimension] ? index : 0;
    };

    const defaultBounds = useMemo(() => {
      return {
        top:
          sliderDimension.height -
          slidesContainerDimension.height +
          margin.bottom,
        right: -margin.left,
        bottom: -margin.top,
        left:
          sliderDimension.width - slidesContainerDimension.width + margin.right,
      };
    }, [sliderDimension, slidesContainerDimension, margin]);

    const maxLength =
      isInfinite ||
      !autoBlockSlideIndexChange ||
      (!slidesContainerDimension[dimension] && !defaultBounds.top)
        ? length
        : Math.ceil(
            Math.abs(
              defaultBounds[position] /
                (slidesContainerDimension[dimension] / length)
            )
          ) + 1;

    const enableDrag =
      dragProps?.isEnable === false
        ? false
        : (isInfinite && shouldBeASlider) || shouldBeASlider;

    const [setSpring, , , inrtia] = useSpring({
      [axis]: 0,
      config: {
        friction: defaultFriction,
        perfectStop: true,
        precisionStop: 0.01,
        interpolation: 'linear',
        ...springConfig,
      },
      onUpdate: (xy) => {
        if (autoPlay?.speed && !dragState.current.isDown) {
          addOffset([
            axis === 'x' ? autoPlay?.speed : 0,
            axis === 'y' ? autoPlay?.speed : 0,
          ]);
        }
        if (isInView) {
          refs?.current?.forEach?.((ref, index) => {
            const DOM = ref.current as HTMLElement;

            const cursor = enableDrag
              ? dragState.current.isDown
                ? 'grabbing'
                : 'grab'
              : 'auto';

            const value =
              isInfinite && shouldBeASlider
                ? wrap(
                    -slidesContainerDimension[dimension] - startOffset,
                    maxSlidesContainersDimension - startOffset,
                    xy[axis] + slidesContainerDimension[dimension] * index
                  )
                : xy[axis];
            //
            // console.log({
            //   DOM,
            //   maxSlidesContainersDimension,
            // });

            DOM.style.transform = `translate${uppercasedAxis}(${
              Math.round(value * 100) / 100
            }px) translateZ(0px)`;
            DOM.style.cursor = cursor;
          });
        }
      },
    });

    // Set the slider to the correct inital position
    const isFirstReset = useRef(true);
    useIsomorphicLayoutEffect(() => {
      if (isFirstReset.current && slidesContainerDimension[dimension]) {
        // Here I need ts-ignore because inrtia doesn't have a types.d.ts file
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inrtia.current.value[axis] =
          -(slidesContainerDimension[dimension] / length) * initialSlideIndex;
        isFirstReset.current = false;
      }
    }, [slidesContainerDimension]);

    const computeDefaultSnapOffset = (
      dragOffset: Vector2,
      dragState: DragState
    ) => {
      const slideDimension = slidesContainerDimension[dimension] / length;

      const [x, y] = dragOffset;

      // Compute the range of allowed movement since
      let minOffset = -Infinity;
      let maxOffset = Infinity;

      const isSlideIndexChangeWithDrag =
        maxSlideIndexChange && dragState.isDown;
      if (isSlideIndexChangeWithDrag) {
        const initialOffset =
          dragState?.initial?.offset?.[axis === 'x' ? 0 : 1] ?? 0;
        minOffset = initialOffset - slideDimension * maxSlideIndexChange;
        maxOffset = initialOffset + slideDimension * maxSlideIndexChange;
      }

      const newDragOffset: Vector2 = [
        axis === 'x'
          ? clamp(getMultipleOf(x, slideDimension), minOffset, maxOffset)
          : x,
        axis === 'y'
          ? clamp(getMultipleOf(y, slideDimension), minOffset, maxOffset)
          : y,
      ];

      return newDragOffset;
    };

    const [
      targetSlideIndex,
      setSlideIndex,
      nextSlide,
      prevSlide,
      maxSlideIndex,
      direction,
      setSlideState,
    ] = useSlideIndex({
      initialSlideIndex,
      length: maxLength,
      isInfinite,
    });

    const onDrag = ({
      offsetWithRubberband,
      offset,
      isDown,
      isTouch,
    }: DragState) => {
      let values: { x: number; y: number };
      if (isInfinite) {
        values = {
          x: offset[0],
          y: offset[1],
        };
      } else {
        values = {
          x: offsetWithRubberband[0],
          y: offsetWithRubberband[1],
        };
      }

      const currentSlideIndex = getSlideIndexFromDragOffset(values[axis]);

      if (currentSlideIndex !== slideIndex.current) {
        slideIndex.current = currentSlideIndex;
        setSlideIndex(Math.min(currentSlideIndex, maxSlideIndex));
      }

      setSpring({
        ...values,
        config: {
          friction: isDown ? 4 : defaultFriction,
          ...(isTouch && isDown
            ? { ...touchSpringConfig }
            : { ...springConfig }),
        },
      });
    };

    useEffect(() => {
      onSlideIndexChange?.(targetSlideIndex);
    }, [onSlideIndexChange, targetSlideIndex]);

    const { setOffset, addOffset, dragState } = useDrag({
      ref: sliderRef,
      snap: shouldSnap ? computeDefaultSnapOffset : undefined,
      on: {
        drag: onDrag,
        dragStart: () => {
          // Reset the direction when the user start dragging. This is needed to avoid memory leak when the user drag and release the slider.
          setSlideState((prevState) => ({ ...prevState, direction: 0 }));

          // I need to ignore this because I don't have the type for inrtia
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setOffset([inrtia.current.value.x, inrtia.current.value.y]);
        },
      },
      // Use a big throw factor to make the slider go to the next slide faster when the max slide index change is 1
      throwFactor:
        shouldSnap && maxSlideIndexChange === 1 ? [600, 600] : [300, 300],
      rubberband: 0.85,
      isEnable: enableDrag,
      bounds: isInfinite ? undefined : defaultBounds,
      axis,
      ...dragProps,
    });

    // Auto detect margins to adjust bounds
    useIsomorphicLayoutEffect(() => {
      if (
        excludeMarginFromDefaultBounds &&
        !isInfinite &&
        slidesContainerRef?.current
      ) {
        const children = slidesContainerRef.current.children;
        const firstChild = children[0];
        const lastChild = children[length - 1] ?? null;

        if (firstChild) {
          const firstChildStyle = getComputedStyle(firstChild);
          const lastChildStyle = lastChild
            ? getComputedStyle(lastChild)
            : firstChildStyle;

          setMargin({
            top: transformPxStringToInt(firstChildStyle.marginTop),
            left: transformPxStringToInt(firstChildStyle.marginLeft),
            right: transformPxStringToInt(lastChildStyle.marginRight),
            bottom: transformPxStringToInt(lastChildStyle.marginBottom),
          });
        }
      }
    }, [
      slidesContainerDimension,
      excludeMarginFromDefaultBounds,
      isInfinite,
      length,
    ]);

    // Move to the current slide index
    useIsomorphicLayoutEffect(() => {
      if (
        !dragState.current.isDown &&
        typeof targetSlideIndex === 'number' &&
        slidesContainerDimension[dimension] !== 0 &&
        shouldBeASlider &&
        shouldSnap
      ) {
        // If the slider is infinite and the length is 2, we can't guess the direction
        // So we use the direction returned by the useSlideIndex hook
        const isUnableToGuessDirection = isInfinite && length === 2;
        const slideOffset = isUnableToGuessDirection
          ? direction
          : getShortestDirection(
              slideIndex.current,
              targetSlideIndex,
              length,
              isInfinite
            );

        const snappedOffset = computeDefaultSnapOffset(
          dragState.current.offset,
          dragState.current
        );

        const offsetToApply = isInfinite
          ? snappedOffset[vectorIndex] -
            (slidesContainerDimension[dimension] / length) * slideOffset
          : -(slidesContainerDimension[dimension] / length) * targetSlideIndex;

        setOffset([
          axis === 'x' ? offsetToApply : 0,
          axis === 'y' ? offsetToApply : 0,
        ]);
      }
    }, [
      targetSlideIndex,
      direction,
      slidesContainerDimension,
      length,
      shouldSnap,
      isInfinite,
      shouldBeASlider,
    ]);

    // Save the current progress of the slider before a resize and apply it afterward.
    // It's a fix to prevent wrong slider position after a resize.
    const progressBeforeResize = useRef(0);
    useIsomorphicLayoutEffect(() => {
      const sliderLength = slidesContainerDimension[dimension];

      // Use the progress value instead of current slide index if the slider is not snapped.
      const newOffset = shouldSnap
        ? (targetSlideIndex / length) * sliderLength * -1
        : progressBeforeResize.current * sliderLength;
      const newOffsetVector = Object.assign(dragState.current.offset);
      newOffsetVector[vectorIndex] = newOffset;

      setOffset(newOffsetVector);
      // I need to ignore this because I don't have the type for inrtia
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inrtia.current.value[axis] = newOffsetVector[vectorIndex];
      return () => {
        if (sliderLength) {
          progressBeforeResize.current =
            dragState.current.offset[vectorIndex] / sliderLength;
        }
      };
    }, [slidesContainerDimension, vectorIndex, shouldSnap, length]);

    useIsomorphicLayoutEffect(() => {
      setSliderState?.({
        addOffset,
        setOffset,
        dragState,
        defaultBounds,
        setSlideIndex,
        nextSlide,
        prevSlide,
        enableDrag,
        maxSlideIndex,
        slideIndex: targetSlideIndex,
      });
    }, [
      defaultBounds,
      setSlideIndex,
      maxSlideIndex,
      nextSlide,
      prevSlide,
      targetSlideIndex,
      enableDrag,
    ]);

    // Reset slider offset if the slider in smaller than his container
    useIsomorphicLayoutEffect(() => {
      if (!shouldBeASlider) {
        setOffset([0, 0]);
      }
    }, [shouldBeASlider]);

    const ssrOffset = (targetSlideIndex / length) * 100;
    const transformString = `translate${axisToUppercase}`;

    const defaultContainerStyle = {
      flexDirection: axis === 'x' ? ('row' as const) : ('column' as const),
      cursor: dragProps?.isEnable ? 'grab' : undefined,
      display: 'inline-flex',
      willChange: 'transform',
    };

    return (
      <div
        ref={setSliderRef}
        style={{
          ...style,
          position: 'relative',
          overflow: customSliderRef ? 'visible' : 'hidden',
          touchAction: axis === 'x' ? 'pan-y' : 'pan-x',
        }}
        className={`${className ? className : ''}${
          smallSliderClassName && !shouldBeASlider
            ? ` ${smallSliderClassName}`
            : ''
        }`}
      >
        <div
          ref={slidesContainerRef as RefObject<HTMLDivElement>}
          className={containerClassName}
          style={{
            transform: !isMounted
              ? `${transformString}(${-ssrOffset}%)`
              : undefined,
            ...defaultContainerStyle,
          }}
        >
          {children}
        </div>
        {slidesContainerCopyRefs?.current?.map((ref, index) => {
          return (
            <div
              ref={ref as RefObject<HTMLDivElement>}
              key={index}
              className={containerClassName}
              style={{
                ...defaultContainerStyle,
                position: 'absolute',
                top: '0px',
                left: '0px',
                transform:
                  index === 0 && !isMounted
                    ? `${transformString}(-${100 + ssrOffset}%)`
                    : index === 1 && !isMounted
                    ? `${transformString}(${100 - ssrOffset}%)`
                    : undefined,
              }}
            >
              {children}
            </div>
          );
        })}
      </div>
    );
  }
);

export const hooks = {
  useSliderState,
  useSlideIndex,
};
export default Slider;
