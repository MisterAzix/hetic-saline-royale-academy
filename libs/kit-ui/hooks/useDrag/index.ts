import { DragState, MouseTouchEvent, UseDragParams, Vector2 } from './@types';
import { useLatestCallback } from '../useLatestCallback';
import { noop } from '../../utils';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { getCoordFromEvent, getTap, isTouchEvent } from './utils';
import { calculateAllKinematics, clamp, rubberbandIfOutOfBounds } from './math';

export function useDrag({
  ref,
  snap,
  onSnap,
  on,
  throwFactor = [0, 0],
  bounds = {
    top: -Infinity,
    left: -Infinity,
    right: Infinity,
    bottom: Infinity,
  },
  axis = 'free',
  rubberband = 0,
  isEnable = true,
  preventUnintentionalClick = true,
}: UseDragParams) {
  const axisIndex = axis === 'free' ? null : axis === 'x' ? 0 : 1;
  const opposedAxisIndex = axis === 'free' ? null : axis === 'x' ? 1 : 0;

  const onDragCallback = on?.drag ?? noop;
  const onDragStartCallback = on?.dragStart ?? noop;
  const onDragEndCallback = on?.dragEnd ?? noop;

  const latestOnDrag = useLatestCallback(onDragCallback);
  const latestOnDragStartCallback = useLatestCallback(onDragStartCallback);
  const latestOnDragEndCallback = useLatestCallback(onDragEndCallback);
  const dragTarget = ref;

  const dragState = useRef<DragState>({
    isDown: false,
    kinematics: {
      velocities: [0, 0],
      velocity: 0,
      direction: [0, 0],
      distance: 0,
    },
    tap: [true, true],
    timeStamp: 0,
    xyCoordinates: [0, 0],
    delta: [0, 0],
    offset: [0, 0],
    offsetWithRubberband: [0, 0],
    movement: [0, 0],
    isScrolling: false,
    isActive: false,
    isTouch: false,
    initial: null,
  });

  const setDragState = useLatestCallback((newDragState: Partial<DragState>) => {
    if (
      axis === 'x' &&
      newDragState?.offset?.[1] &&
      newDragState?.offsetWithRubberband?.[1]
    ) {
      newDragState.offset[1] = dragState.current.offset[1];
      newDragState.offsetWithRubberband[1] =
        dragState.current.offsetWithRubberband[1];
    } else if (
      axis === 'y' &&
      newDragState?.offset?.[0] &&
      newDragState?.offsetWithRubberband?.[0]
    ) {
      newDragState.offset[0] = dragState.current.offset[0];
      newDragState.offsetWithRubberband[0] =
        dragState.current.offsetWithRubberband[0];
    }

    dragState.current = {
      ...dragState.current,
      ...newDragState,
    };
  });

  const addEvents = () => {
    document.addEventListener('touchmove', onDragChange, {
      passive: false,
    });
    document.addEventListener('touchcancel', onDragEnd);
    document.addEventListener('touchend', onDragEnd);

    document.addEventListener('mousemove', onDragChange, {
      passive: false,
    });
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('mouseleave', onDragEnd);
  };

  const removeEvents = () => {
    document.removeEventListener('touchmove', onDragChange);
    document.removeEventListener('touchcancel', onDragEnd);
    document.removeEventListener('touchend', onDragEnd);

    document.removeEventListener('mousemove', onDragChange);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('mouseleave', onDragEnd);
  };

  // On Click Capture
  useIsomorphicLayoutEffect(() => {
    const onClickCapture = (e: MouseTouchEvent) => {
      const [tapX, tapY] = dragState.current.tap;
      if (!tapX || !tapY) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (preventUnintentionalClick) {
      dragTarget?.current?.addEventListener('click', onClickCapture, true);
    }

    return () => {
      dragTarget?.current?.removeEventListener('click', onClickCapture, true);
    };
  });

  // On Drag Start
  useIsomorphicLayoutEffect(() => {
    const onDragStart = (e: MouseTouchEvent) => {
      addEvents();

      setDragState({
        timeStamp: e.timeStamp,
        tap: [true, true],
        isDown: true,
        movement: [0, 0],
        xyCoordinates: getCoordFromEvent(e),
        isTouch: isTouchEvent(e),
      });

      setDragState({
        initial: Object.assign(dragState.current),
      });
      latestOnDrag?.(dragState.current);
      latestOnDragStartCallback?.(dragState.current);
    };

    if (isEnable) {
      dragTarget?.current?.addEventListener('touchstart', onDragStart, {
        passive: false,
      });
      dragTarget?.current?.addEventListener('mousedown', onDragStart, {
        passive: false,
      });
    }

    return () => {
      removeEvents();
      dragTarget?.current?.removeEventListener('touchstart', onDragStart);
      dragTarget?.current?.removeEventListener('mousedown', onDragStart);
    };
  }, [isEnable]);

  const onDragChange = useLatestCallback((e: MouseTouchEvent) => {
    if (!dragState.current.isDown) return;

    const coordinates = getCoordFromEvent(e);

    const prevTimeStamp = dragState.current.timeStamp;
    const timeStamp = e.timeStamp;

    const [x, y] = coordinates;
    const [prevX, prevY] = dragState.current.xyCoordinates;
    const [prevMovementX, prevMovementY] = dragState.current.movement;
    const [prevOffsetX, prevOffsetY] = dragState.current.offset;
    const [deltaX, deltaY] = [x - prevX, y - prevY];

    const movement: Vector2 = [prevMovementX + deltaX, prevMovementY + deltaY];
    const offset: Vector2 = [prevOffsetX + deltaX, prevOffsetY + deltaY];

    const [oX, oY] = offset;
    const { top, bottom, left, right } = bounds;

    const offsetWithRubberband: Vector2 = [
      rubberbandIfOutOfBounds(oX, left as number, right as number, rubberband),
      rubberbandIfOutOfBounds(oY, top as number, bottom as number, rubberband),
    ];

    const kinematics = calculateAllKinematics(
      movement,
      [deltaX, deltaY],
      timeStamp - prevTimeStamp
    );

    const tap = getTap(movement);

    const isFreeAxis = axis === 'free';

    const isScrolling = !isFreeAxis
      ? Math.abs(movement[opposedAxisIndex as number]) > 3
      : false;

    const isActive = !dragState.current.isActive
      ? !isFreeAxis
        ? !tap[axisIndex as number] && !isScrolling
        : !tap[axisIndex as number] && !tap[opposedAxisIndex as number]
      : dragState.current.isActive;

    if (isActive) {
      e.preventDefault();
    }

    setDragState({
      xyCoordinates: coordinates,
      kinematics,
      timeStamp,
      movement,
      isActive,
      isScrolling,
      tap,
      delta: [deltaX, deltaY],
      isTouch: isTouchEvent(e),
      ...(isActive ? { offset, offsetWithRubberband } : {}),
    });

    latestOnDrag?.(dragState.current);
  });

  const onDragEnd = useLatestCallback((e: MouseTouchEvent) => {
    removeEvents();

    const isActive = dragState.current.isActive;
    const [oX, oY] = dragState.current.offset;
    const { top, bottom, left, right } = bounds;
    const [throwX, throwY] = isActive
      ? [
          dragState.current.kinematics.velocities[0] * throwFactor[0],
          dragState.current.kinematics.velocities[1] * throwFactor[1],
        ]
      : [0, 0];

    let offset: Vector2 = [oX + throwX, oY + throwY];

    // Snap offset
    offset = snap ? snap(offset, Object.assign(dragState.current)) : offset;
    //Clamp offset
    offset = [
      clamp(offset[0], left as number, right as number),
      clamp(offset[1], top as number, bottom as number),
    ];

    setDragState({
      timeStamp: e.timeStamp,
      offset,
      offsetWithRubberband: offset,
      isDown: false,
      isScrolling: false,
      isActive: false,
      isTouch: isTouchEvent(e),
    });

    latestOnDrag?.(dragState.current);
    latestOnDragEndCallback?.(dragState.current);
    snap && onSnap?.(dragState.current);
  });

  useIsomorphicLayoutEffect(() => {
    return () => removeEvents();
  }, []);

  const setOffset = (offset: Vector2) => {
    const [oX, oY] = offset;
    const [currentOX, currentOY] = dragState.current.offset;
    const [deltaX, deltaY] = [oX - currentOX, oY - currentOY];
    const { top, bottom, left, right } = bounds;
    const [prevMvX, prevMvY] = dragState.current.movement;
    const movement: Vector2 = [prevMvX + deltaX, prevMvY + deltaY];

    const prevTimeStamp = dragState.current.timeStamp;
    const timeStamp = Date.now();
    const kinematics = calculateAllKinematics(
      movement,
      [deltaX, deltaY],
      timeStamp - prevTimeStamp
    );
    let newOffset: Vector2 = [0, 0];

    newOffset = [
      clamp(oX, left as number, right as number),
      clamp(oY, top as number, bottom as number),
    ];

    setDragState({
      kinematics,
      offset: newOffset,
      offsetWithRubberband: newOffset,
    });
    latestOnDrag?.(dragState.current);
  };

  const addOffset = (offset: Vector2) => {
    const [currentOX, currentOY] = dragState.current.offset;
    const [deltaOX, deltaOY] = offset;
    setOffset([currentOX + deltaOX, currentOY + deltaOY]);
  };

  return {
    addOffset,
    setOffset,
    dragState,
  } as const;
}
