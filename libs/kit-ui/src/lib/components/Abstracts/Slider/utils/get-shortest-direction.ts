export function getShortestDirection(
  currentIndex: number,
  targetIndex: number,
  length: number,
  infinite: boolean
) {
  const toRight = (targetIndex - currentIndex + length) % length;
  const toLeft = (currentIndex - targetIndex + length) % length;
  if (infinite) {
    return toRight > toLeft ? -toLeft : toRight;
  } else {
    return currentIndex > targetIndex ? -toLeft : toRight;
  }
}
