import { FlattenSimpleInterpolation } from 'styled-components';
import { SCREENS } from '../../theme';
import type { Breakpoint } from '../../@types';
import { getTheme } from '../get-theme';
const from = (
  breakpoint: Breakpoint,
  content: string | FlattenSimpleInterpolation | undefined
) => {
  console.log(content)
  return `@media screen and (min-width: ${getTheme(SCREENS, breakpoint)}) {
    ${content}
  }`;
};

const fromTo = (
  breakpoint: Breakpoint,
  content: string | FlattenSimpleInterpolation
) => {
  return `@media screen and (min-width: ${getTheme(
    SCREENS,
    breakpoint
  )}) and (max-width: ${getTheme(SCREENS, breakpoint)}) {
   ${content}
  }`;
};

export { from, fromTo };
