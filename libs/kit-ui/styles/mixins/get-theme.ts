import type { Theme } from '../@types';

export function getTheme<T extends Theme>(obj: T, value: keyof T) {
  return obj[value];
}
