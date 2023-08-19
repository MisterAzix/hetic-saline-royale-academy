import {
  CSSProperties,
  // Dispatch,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  RefObject,
  // SetStateAction,
} from 'react';
import { Axis } from './@types';
import { UseDragParams } from '../../../../../hooks/useDrag/@types';

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
    // springConfig: UseSpringParams['config'];
    // touchSpringConfig: UseSpringParams['config'];
    customSliderRef: RefObject<unknown>;
    excludeMarginFromDefaultBounds: boolean;
    initialSlideIndex: number;
    // setSliderState: Dispatch<SetStateAction<SliderState>>;
    onSlideIndexChange: (slideIndex: number) => void;
    style: CSSProperties;
  } & PropsWithChildren<Element[] | ReactNode[]>
>;

const Slider = forwardRef((ref) => {
  return <div>je suis un slider</div>;
});

export default Slider;
