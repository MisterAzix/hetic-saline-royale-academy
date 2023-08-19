import { RefObject } from 'react';
import { Axis } from '../../../src/lib/components/Abstracts/Slider/@types';
import { Kinematics, Tap, Vector2 } from './physics';
import { Bounds } from './dimensions';

export type DragState = {
  isDown: boolean;
  tap: Tap;
  kinematics: Kinematics;
  xyCoordinates: Vector2;
  delta: Vector2;
  timeStamp: number;
  offset: Vector2;
  offsetWithRubberband: Vector2;
  movement: Vector2;
  isActive: boolean;
  isScrolling: boolean;
  isTouch: boolean;
} & InitialDragState;

export type InitialDragState = {
  initial: DragState | null;
};

export type DragEvent = Partial<{
  drag: (params: DragState) => void;
  dragStart: (params: DragState) => void;
  dragEnd: (params: DragState) => void;
}>;

export type UseDragParams = Partial<{
  ref: RefObject<HTMLElement>;
  preventUnintentionalClick: boolean;
  isEnable: boolean;
  snap: (offset: Vector2, dragState: DragState) => Vector2;
  bounds: Bounds;
  axis: Axis;
  throwFactor: Vector2;
  rubberband: number;
  on: DragEvent;
  onSnap: (params: DragState) => void;
}>;
