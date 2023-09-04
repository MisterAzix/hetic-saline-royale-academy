export function transformPxStringToInt(pxString: string) {
  return parseInt(pxString.split('px')[0]);
}
