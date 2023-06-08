import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: blue;
    font-family: sans-serif;
  }`;
export const decorators = [withThemeFromJSXProvider({ GlobalStyles })];
