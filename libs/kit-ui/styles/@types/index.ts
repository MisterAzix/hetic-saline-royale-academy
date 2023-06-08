import {
  COLORS,
  DESKTOP,
  FONT_WEIGHTS,
  MAX,
  MOBILE,
  SCREENS,
  SPACING,
  TABLET,
} from '../theme';

type Theme =
  | typeof SPACING
  | typeof FONT_WEIGHTS
  | typeof MOBILE
  | typeof TABLET
  | typeof DESKTOP
  | typeof COLORS
  | typeof MAX
  | typeof SCREENS;

type Breakpoint = keyof typeof SCREENS;

type ColumnConfig = 'mobile' | 'tablet' | 'desktop';

export type { Breakpoint, Theme, ColumnConfig };
