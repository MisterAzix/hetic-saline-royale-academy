export function getCopyCount(
  sliderDimension: number,
  slidesContainerDimension: number
) {
  if (sliderDimension && slidesContainerDimension) {
    return Math.ceil(sliderDimension / slidesContainerDimension);
  } else {
    return 2;
  }
}
