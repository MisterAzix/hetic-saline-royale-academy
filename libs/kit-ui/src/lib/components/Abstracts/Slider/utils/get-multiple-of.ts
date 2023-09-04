export function getMultipleOf(num: number, mul: number): number {
  return num && mul ? Math.round(num / mul) * mul : num
}
