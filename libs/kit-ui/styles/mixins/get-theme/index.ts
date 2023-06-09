import type { Theme } from '../../@types';

export const getTheme = <T extends Theme>(obj: T, value: keyof T) => {
  return obj[value];
};
