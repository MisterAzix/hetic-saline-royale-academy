import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from '../styles/global-style';
import { ThemeProvider } from '@emotion/react';
import { muiTheme } from '../styles/theme';

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
