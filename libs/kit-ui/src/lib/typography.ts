// xs: 12px
import { css } from '@emotion/react';
import {
  FONT_SIZES,
  FONT_STYLES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
} from '../../styles/typograhy';

import { getTheme } from '../../styles/mixins';

const textXsBase = css`
  font-family: 'Inter', sans-serif;
  font-style: ${getTheme(FONT_STYLES, 'normal')};
  font-size: ${getTheme(FONT_SIZES, 'text-xs')};
  line-height: ${getTheme(LINE_HEIGHTS, 'text-xs')};
`;

const textXsRegular = css`
  ${textXsBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'regular')};
`;

const textXsMedium = css`
  ${textXsBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'medium')};
`;

const textXsSemiBold = css`
  ${textXsBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'semibold')};
`;

const textXsBold = css`
  ${textXsBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'bold')};
`;

// sm: 14px
const textSmBase = css`
  font-family: 'Inter', sans-serif;
  font-style: ${getTheme(FONT_STYLES, 'normal')};
  font-size: ${getTheme(FONT_SIZES, 'text-sm')};
  line-height: ${getTheme(LINE_HEIGHTS, 'text-sm')};
`;

const textSmRegular = css`
  ${textSmBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'regular')};
`;

const textSmMedium = css`
  ${textSmBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'medium')};
`;

const textSmSemiBold = css`
  ${textSmBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'semibold')};
`;

const textSmBold = css`
  ${textSmBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'bold')};
`;

// md: 16px
const textMdBase = css`
  font-family: 'Inter', sans-serif;
  font-style: ${getTheme(FONT_STYLES, 'normal')};
  font-size: ${getTheme(FONT_SIZES, 'text-md')};
  line-height: ${getTheme(LINE_HEIGHTS, 'text-md')};
`;

const textMdRegular = css`
  ${textMdBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'regular')};
`;

const textMdMedium = css`
  ${textMdBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'medium')};
`;

const textMdSemiBold = css`
  ${textMdBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'semibold')};
`;

const textMdBold = css`
  ${textMdBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'bold')};
`;

const textMdRegularItalic = css`
  ${textMdRegular};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textMdMediumItalic = css`
  ${textMdMedium};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textMdSemiBoldItalic = css`
  ${textMdSemiBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textMdBoldItalic = css`
  ${textMdBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

// lg: 18px
const textLgBase = css`
  font-family: 'Inter', sans-serif;
  font-style: ${getTheme(FONT_STYLES, 'normal')};
  font-size: ${getTheme(FONT_SIZES, 'text-lg')};
  line-height: ${getTheme(LINE_HEIGHTS, 'text-lg')};
`;

const textLgRegular = css`
  ${textLgBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'regular')};
`;

const textLgMedium = css`
  ${textLgBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'medium')};
`;

const textLgSemiBold = css`
  ${textLgBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'semibold')};
`;

const textLgBold = css`
  ${textLgBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'bold')};
`;

const textLgRegularItalic = css`
  ${textLgRegular};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textLgMediumItalic = css`
  ${textLgMedium};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textLgSemiBoldItalic = css`
  ${textLgSemiBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textLgBoldItalic = css`
  ${textLgBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

// xl: 20px
const textXlBase = css`
  font-family: 'Inter', sans-serif;
  font-style: ${getTheme(FONT_STYLES, 'normal')};
  font-size: ${getTheme(FONT_SIZES, 'text-xl')};
  line-height: ${getTheme(LINE_HEIGHTS, 'text-xl')};
`;

const textXlRegular = css`
  ${textXlBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'regular')};
`;

const textXlMedium = css`
  ${textXlBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'medium')};
`;

const textXlSemiBold = css`
  ${textXlBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'semibold')};
`;

const textXlBold = css`
  ${textXlBase};
  font-weight: ${getTheme(FONT_WEIGHTS, 'bold')};
`;

const textXlRegularItalic = css`
  ${textXlRegular};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textXlMediumItalic = css`
  ${textXlMedium};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textXlSemiBoldItalic = css`
  ${textXlSemiBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

const textXlBoldItalic = css`
  ${textXlBold};
  font-style: ${getTheme(FONT_STYLES, 'italic')};
`;

export const typography = {
  xs: {
    regular: textXsRegular,
    medium: textXsMedium,
    semiBold: textXsSemiBold,
    bold: textXsBold,
  },
  sm: {
    regular: textSmRegular,
    medium: textSmMedium,
    semiBold: textSmSemiBold,
    bold: textSmBold,
  },
  md: {
    regular: textMdRegular,
    medium: textMdMedium,
    semiBold: textMdSemiBold,
    bold: textMdBold,
    regularItalic: textMdRegularItalic,
    mediumItalic: textMdMediumItalic,
    semiBoldItalic: textMdSemiBoldItalic,
    boldItalic: textMdBoldItalic,
  },
  lg: {
    regular: textLgRegular,
    medium: textLgMedium,
    semiBold: textLgSemiBold,
    bold: textLgBold,
    regularItalic: textLgRegularItalic,
    mediumItalic: textLgMediumItalic,
    semiBoldItalic: textLgSemiBoldItalic,
    boldItalic: textLgBoldItalic,
  },
  xl: {
    regular: textXlRegular,
    medium: textXlMedium,
    semiBold: textXlSemiBold,
    bold: textXlBold,
    regularItalic: textXlRegularItalic,
    mediumItalic: textXlMediumItalic,
    semiBoldItalic: textXlSemiBoldItalic,
    boldItalic: textXlBoldItalic,
  },
};
