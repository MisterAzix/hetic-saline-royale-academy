import { css } from 'styled-components';

// xs: 12px
const textXsBase = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
`;

const textXsRegular = css`
  ${textXsBase};
  font-weight: 400;
`;

const textXsMedium = css`
  ${textXsBase};
  font-weight: 500;
`;

const textXsSemiBold = css`
  ${textXsBase};
  font-weight: 600;
`;

const textXsBold = css`
  ${textXsBase};
  font-weight: 700;
`;

// sm: 14px
const textSmBase = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
`;

const textSmRegular = css`
  ${textSmBase};
  font-weight: 400;
`;

const textSmMedium = css`
  ${textSmBase};
  font-weight: 500;
`;

const textSmSemiBold = css`
  ${textSmBase};
  font-weight: 600;
`;

const textSmBold = css`
  ${textSmBase};
  font-weight: 700;
`;

// md: 16px
const textMdBase = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
`;

const textMdRegular = css`
  ${textMdBase};
  font-weight: 400;
`;

const textMdMedium = css`
  ${textMdBase};
  font-weight: 500;
`;

const textMdSemiBold = css`
  ${textMdBase};
  font-weight: 600;
`;

const textMdBold = css`
  ${textMdBase};
  font-weight: 700;
`;

const textMdRegularItalic = css`
  ${textMdRegular};
  font-style: italic;
`;

const textMdMediumItalic = css`
  ${textMdMedium};
  font-style: italic;
`;

const textMdSemiBoldItalic = css`
  ${textMdSemiBold};
  font-style: italic;
`;

const textMdBoldItalic = css`
  ${textMdBold};
  font-style: italic;
`;

// lg: 18px
const textLgBase = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
`;

const textLgRegular = css`
  ${textLgBase};
  font-weight: 400;
`;

const textLgMedium = css`
  ${textLgBase};
  font-weight: 500;
`;

const textLgSemiBold = css`
  ${textLgBase};
  font-weight: 600;
`;

const textLgBold = css`
  ${textLgBase};
  font-weight: 700;
`;

const textLgRegularItalic = css`
  ${textLgRegular};
  font-style: italic;
`;

const textLgMediumItalic = css`
  ${textLgMedium};
  font-style: italic;
`;

const textLgSemiBoldItalic = css`
  ${textLgSemiBold};
  font-style: italic;
`;

const textLgBoldItalic = css`
  ${textLgBold};
  font-style: italic;
`;

// xl: 20px
const textXlBase = css`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
`;

const textXlRegular = css`
  ${textXlBase};
  font-weight: 400;
`;

const textXlMedium = css`
  ${textXlBase};
  font-weight: 500;
`;

const textXlSemiBold = css`
  ${textXlBase};
  font-weight: 600;
`;

const textXlBold = css`
  ${textXlBase};
  font-weight: 700;
`;

const textXlRegularItalic = css`
  ${textXlRegular};
  font-style: italic;
`;

const textXlMediumItalic = css`
  ${textXlMedium};
  font-style: italic;
`;

const textXlSemiBoldItalic = css`
  ${textXlSemiBold};
  font-style: italic;
`;

const textXlBoldItalic = css`
  ${textXlBold};
  font-style: italic;
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
