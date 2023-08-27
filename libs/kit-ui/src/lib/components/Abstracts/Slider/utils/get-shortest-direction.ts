export function getShortestDirection(
  currentIndex: number,
  targetIndex: number,
  length: number,
  isInfinite: boolean
) {
  const toRight = (targetIndex - currentIndex + length) % length;
  const toLeft = (currentIndex - targetIndex + length) % length;
  if (isInfinite) {
    return toRight > toLeft ? -toLeft : toRight;
  } else {
    return currentIndex > targetIndex ? -toLeft : toRight;
  }
}
