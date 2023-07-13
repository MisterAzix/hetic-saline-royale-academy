export function rem(pixel: number, context = 16) {
  return `${pixel / context}rem`;
}
