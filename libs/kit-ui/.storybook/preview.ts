import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from '../styles/global-style';

export const decorators = [withThemeFromJSXProvider({ GlobalStyles })];
