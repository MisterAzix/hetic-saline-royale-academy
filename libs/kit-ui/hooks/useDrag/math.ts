import { Kinematics, Vector2 } from './@types';

const IOS_CONSTANT = 0.55;

const rubberband = (distance: number, dimension: number, constant: number) => {
  if (dimension === 0 || Math.abs(dimension) === Infinity) {
    return Math.pow(distance, constant * 5);
  }

  return (distance * dimension * constant) / (dimension + constant * distance);
};

export const rubberbandIfOutOfBounds = (
  position: number,
  min: number,
  max: number,
  constant = IOS_CONSTANT
) => {
  if (position < min) {
    return -rubberband(min - position, max - min, constant) + min;
  }
  if (position > max) {
    return +rubberband(position - max, max - min, constant) + max;
  }

  return position;
};

export const calculateDistance = (movement: Vector2): number => {
  return Math.hypot(...movement);
};

export const calculateAllKinematics = (
  movement: Vector2,
  delta: Vector2,
  deltaTime: number
): Kinematics => {
  const dl = calculateDistance(delta);

  const alpha = dl === 0 ? 0 : 1 / dl;
  const beta = deltaTime === 0 ? 0 : 1 / deltaTime;

  const velocity = beta * dl;
  const velocities = delta.map((v) => beta * v);
  const direction = delta.map((v) => alpha * v);
  const distance = calculateDistance(movement);

  return { velocities, velocity, distance, direction };
};

export const clamp = (number: number, min: number, max: number) => {
  return Math.min(Math.max(number, min), max);
};

export function wrap(min: number, max: number, value: number) {
  const range = max - min
  return ((range + ((value - min) % range)) % range) + min
}

