import { MouseTouchEvent, Tap, Vector2 } from './@types';

export const getTap = ([mx, my]: Vector2): Tap => {
  return [Math.abs(mx) < 3, Math.abs(my) < 3];
};

export const isTouchEvent = (e: MouseTouchEvent) => {
  return 'touches' in e ? e?.touches?.length > 0 : false;
};

export const getCoordFromEvent = (e: MouseTouchEvent) => {
  let coord: Vector2 = [0, 0];
  const hasTouchEvent = isTouchEvent(e);

  if (hasTouchEvent && 'touches' in e) {
    coord = [e.touches[0].clientX, e.touches[0].clientY];
  } else if ('clientX' in e && 'clientY' in e) {
    coord = [e?.clientX, e?.clientY];
  }

  return coord;
};
