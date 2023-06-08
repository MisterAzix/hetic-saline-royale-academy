export function em(pixel: number, context = 16) {
  return `${pixel / context}em`;
}
