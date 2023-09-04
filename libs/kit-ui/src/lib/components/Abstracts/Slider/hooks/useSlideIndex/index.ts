import { useCallback, useEffect, useMemo, useState } from 'react';
import { clamp } from '../../../../../../../hooks/useDrag/math';

type UseSliderParams = {
  length: number;
  isInfinite?: boolean;
  initialSlideIndex?: number;
};
export default function useSlideIndex({
  length,
  isInfinite,
  initialSlideIndex = 0,
}: UseSliderParams) {
  const maxIndex: number = useMemo(() => {
    return Math.max(0, length - 1);
  }, [length]);

  const [{ slideIndex, direction }, setSlideState] = useState({
    slideIndex: clamp(initialSlideIndex, 0, maxIndex),
    /**
     * @note 0: no direction, 1: next, -1: prev
     * This is used to determine the direction of the animation.
     * When the slider is infinite and there is only two items, we can't determine the direction
     * We need to set the direction manually with the nextSlide or prevSlide function.
     */
    direction: 0,
  });

  const setSlideIndex = useCallback(
    (targetedSlideIndex: number) => {
      return setSlideState(({ direction }) => ({
        slideIndex: targetedSlideIndex,
        direction,
      }));
    },
    [setSlideState]
  );

  const nextSlide = useCallback(() => {
    return setSlideState(({ slideIndex: prevSlideIndex }) => {
      const targetedSlideIndex = prevSlideIndex + 1;
      let slideIndex: number;
      if (isInfinite) {
        slideIndex = targetedSlideIndex > maxIndex ? 0 : targetedSlideIndex;
      } else {
        slideIndex = clamp(targetedSlideIndex, 0, maxIndex);
      }

      return {
        slideIndex,
        direction: 1,
      };
    });
  }, [maxIndex, isInfinite, setSlideState]);

  const prevSlide = useCallback(() => {
    return setSlideState(({ slideIndex: prevSlideIndex }) => {
      const targetedSlideIndex = prevSlideIndex - 1;
      let slideIndex: number;
      if (isInfinite) {
        slideIndex = targetedSlideIndex < 0 ? maxIndex : targetedSlideIndex;
      } else {
        slideIndex = clamp(targetedSlideIndex, 0, maxIndex);
      }
      return {
        slideIndex,
        direction: -1,
      };
    });
  }, [maxIndex, isInfinite, setSlideState]);

  useEffect(() => {
    if (slideIndex > maxIndex) {
      setSlideState(({ direction }) => ({
        slideIndex: maxIndex,
        direction,
      }));
    }
  }, [maxIndex, slideIndex, length, setSlideState]);

  return [
    slideIndex,
    setSlideIndex,
    nextSlide,
    prevSlide,
    maxIndex,
    direction,
    setSlideState,
  ] as const;
}
