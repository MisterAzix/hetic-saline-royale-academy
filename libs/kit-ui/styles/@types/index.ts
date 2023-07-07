import { THEME, SCREENS, MOBILE, TABLET, DESKTOP } from '../theme';
import { CSSProperties } from 'react';

export type Theme = (typeof THEME)[number];

export type Breakpoint = keyof typeof SCREENS;

export type ColumnConfig = 'mobile' | 'tablet' | 'desktop';

export type ScreenSize = typeof MOBILE | typeof TABLET | typeof DESKTOP;

export type ToObject<Key extends string, Type = string> = { [K in Key]: Type };

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type FontStyles =
  | 'italic'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'normal';

export type FontWeightsInNumber = 400 | 500 | 600 | 700;

export type Typography =
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl';

export type TextPresets = `${Typography}-${FontWeight}`;

type TextPresetsObject = ToObject<TextPresets, CSSProperties>;

export type TextPresetsBoolean = ToObject<
  `${Typography}-${FontWeight}`,
  boolean
>;

/**
 * @description
 * We need to extend the MUI theme types to add our custom typography variants.
 * Otherwise, we'll get a type error when trying to use them.
 */
declare module '@mui/material/styles' {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyVariants extends TextPresetsObject {}
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyVariantsOptions extends TextPresetsObject {}
}

declare module '@mui/material/Typography' {
  //eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypographyPropsVariantOverrides extends TextPresetsBoolean {}
}
