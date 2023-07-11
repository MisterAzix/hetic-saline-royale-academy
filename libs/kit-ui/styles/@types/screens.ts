import {DESKTOP, MOBILE, SCREENS, TABLET} from '../theme'

export type Breakpoint = keyof typeof SCREENS;

export type ColumnConfig = 'mobile' | 'tablet' | 'desktop';

export type ScreenSize = typeof MOBILE | typeof TABLET | typeof DESKTOP;
