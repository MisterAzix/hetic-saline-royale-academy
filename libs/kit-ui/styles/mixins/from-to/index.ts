import { SCREENS } from '../../theme';
import type { Breakpoint } from '../../@types';
import { getTheme } from '../get-theme';
import { SerializedStyles } from '@emotion/react';
const from = (
  breakpoint: Breakpoint,
  content: string | SerializedStyles | undefined
) => {
  return `@media screen and (min-width: ${getTheme(SCREENS, breakpoint)}) {
    ${content}
  }`;
};

const fromTo = (breakpoint: Breakpoint, content: string | SerializedStyles) => {
  return `@media screen and (min-width: ${getTheme(
    SCREENS,
    breakpoint
  )}) and (max-width: ${getTheme(SCREENS, breakpoint)}) {
   ${content}
  }`;
};

export { from, fromTo };
