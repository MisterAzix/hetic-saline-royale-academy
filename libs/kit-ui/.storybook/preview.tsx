import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from '../src/lib/styles/global-style';
import { ThemeProvider } from '@emotion/react';
import { muiTheme } from '../src/lib/styles/theme';

export const withMUITheme = (Story) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  );
};
export const decorators = [
  withThemeFromJSXProvider({ GlobalStyles }),
  withMUITheme,
];
