import { Dispatch, RefObject, SetStateAction, useState } from 'react';
import {
  DragState,
  UseDragParams,
  Vector2,
} from '../../../../../../../hooks/useDrag/@types';
import { Nullable } from '../../../../../../../@types';

export type SliderState = {
  dragState: Nullable<RefObject<DragState>>;
  addOffset: (offset: Vector2) => void;
  setOffset: (offset: Vector2) => void;
  defaultBounds: UseDragParams['bounds'];
  setSlideIndex:
    | Dispatch<SetStateAction<number>>
    | ((targetedSlideIndex: number) => void);
  nextSlide: () => void;
  prevSlide: () => void;
  slideIndex: number;
  enableDrag: boolean;
  maxSlideIndex: number;
};

export default function useSliderState(initialState?: Partial<SliderState>) {
  return useState<SliderState>({
    addOffset: () => ({}),
    setOffset: () => ({}),
    dragState: null,
    defaultBounds: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    setSlideIndex: () => ({}),
    nextSlide: () => ({}),
    prevSlide: () => ({}),
    slideIndex: 0,
    maxSlideIndex: 0,
    enableDrag: true,
    ...(initialState ?? {}),
  });
}
