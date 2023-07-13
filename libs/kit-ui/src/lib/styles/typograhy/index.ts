import {
  FontStyles,
  FontWeight,
  FontWeightsInNumber,
  Typography,
} from '../@types';

export const getLineHeightInRatio = (
  lineHeightInPx: number,
  fontSizeInPx: number
) => {
  return lineHeightInPx / fontSizeInPx;
};

const ROOT_FONT_SIZE = 16;

const LINE_HEIGHTS = {
  'text-xs': getLineHeightInRatio(18, 12),
  'text-sm': getLineHeightInRatio(20, 14),
  'text-md': getLineHeightInRatio(24, 16),
  'text-lg': getLineHeightInRatio(28, 18),
  'text-xl': getLineHeightInRatio(30, 20),
  'display-xs': getLineHeightInRatio(32, 24),
  'display-sm': getLineHeightInRatio(38, 30),
  'display-md': getLineHeightInRatio(44, 36),
  'display-lg': getLineHeightInRatio(60, 48),
  'display-xl': getLineHeightInRatio(72, 60),
  'display-2xl': getLineHeightInRatio(90, 72),
} as const satisfies Record<Typography, number>;

const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const satisfies Record<FontWeight, FontWeightsInNumber>;

const FONT_SIZES = {
  'text-xs': `${12 / ROOT_FONT_SIZE}rem`,
  'text-sm': `${14 / ROOT_FONT_SIZE}rem`,
  'text-md': `${16 / ROOT_FONT_SIZE}rem`,
  'text-lg': `${18 / ROOT_FONT_SIZE}rem`,
  'text-xl': `${20 / ROOT_FONT_SIZE}rem`,
  'display-xs': `${24 / ROOT_FONT_SIZE}rem`,
  'display-sm': `${30 / ROOT_FONT_SIZE}rem`,
  'display-md': `${36 / ROOT_FONT_SIZE}rem`,
  'display-lg': `${48 / ROOT_FONT_SIZE}rem`,
  'display-xl': `${60 / ROOT_FONT_SIZE}rem`,
  'display-2xl': `${72 / ROOT_FONT_SIZE}rem`,
} as const satisfies Record<Typography, `${number}rem`>;

const FONT_STYLES = {
  italic: 'italic',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normal: 'normal',
} as const satisfies Record<FontStyles, FontStyles>;

export { LINE_HEIGHTS, ROOT_FONT_SIZE, FONT_WEIGHTS, FONT_SIZES, FONT_STYLES };
