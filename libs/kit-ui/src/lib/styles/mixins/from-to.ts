import { SCREENS } from '../theme';
import type { Breakpoint } from '../@types';
import { getTheme } from './get-theme';
import { SerializedStyles } from '@emotion/react';
import { raiseError } from '../../../../../utils';

const from = (
  breakpoint: Breakpoint,
  content: string | SerializedStyles | undefined
) => {
  if (typeof content === 'string')
    return `@media screen and (min-width: ${getTheme(SCREENS, breakpoint)}) {
    ${content}
  }`;

  if (typeof content === 'object') {
    return `@media screen and (min-width: ${getTheme(SCREENS, breakpoint)}) {
    ${content?.styles}}`;
  }

  raiseError(
    'The content of the from function is not a string or css function from @emotion/react'
  );
};

const fromTo = (
  breakpoint: Breakpoint,
  content: string | SerializedStyles | undefined
) => {
  if (typeof content === 'string') {
    return `@media screen and (min-width: ${getTheme(
      SCREENS,
      breakpoint
    )}) and (max-width: ${getTheme(SCREENS, breakpoint)}) {
   ${content}
  }`;
  }

  if (typeof content === 'object') {
    return `@media screen and (min-width: ${getTheme(
      SCREENS,
      breakpoint
    )}) and (max-width: ${getTheme(SCREENS, breakpoint)}) {
   ${content.styles}
  }`;
  }

  raiseError(
    'The content of the from function is not a string or css function from @emotion/react'
  );
};

export { from, fromTo };
