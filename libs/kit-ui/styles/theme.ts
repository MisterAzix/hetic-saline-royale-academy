import { em } from './mixins';

const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  primary_25: '#FCFAFF',
  primary_50: '#F9F5FF',
  primary_100: '#F4EBFF',
  primary_200: '#E9D7FE',
  primary_300: '#D6BBFB',
  primary_400: '#B692F6',
  primary_500: '#9E77ED',
  primary_600: '#7F56D9',
  primary_700: '#6941C6',
  primary_800: '#53389E',
  primary_900: '#42307D',
  error_25: '#FFFBFA',
  error_50: '#FEF3F2',
  error_100: '#FEE4E2',
  error_200: '#FECDCA',
  error_300: '#FDA29B',
  error_400: '#F97066',
  error_500: '#F04438',
  error_600: '#D92D20',
  error_700: '#B42318',
  error_800: '#912018',
  error_900: '#7A271A',
  gray_25: '#FCFCFD',
  gray_50: '#F9FAFB',
  gray_100: '#F2F4F7',
  gray_200: '#EAECF0',
  gray_300: '#D0D5DD',
  gray_400: '#98A2B3',
  gray_500: '#667085',
  gray_600: '#475467',
  gray_700: '#344054',
  gray_800: '#1D2939',
  gray_900: '#101828',
} as const;

const COLUMNS = {
  MOBILE: 4,
  TABLET: 6,
  DESKTOP: 12,
} as const;

const GUTTERS = {
  MOBILE: 3,
  TABLET: 5,
  DESKTOP: 11,
  MOBILE_SPACING: "16px",
  TABLET_SPACING: "32px",
  DESKTOP_SPACING: "32px",
};

const MARGINS = {
  MOBILE: '16px',
  TABLET: '32px',
  DESKTOP: '32px',
};

const MOBILE = {
  columns: COLUMNS.MOBILE,
  gutter: GUTTERS.MOBILE_SPACING,
  numberOfGutters: GUTTERS.MOBILE,
  margin: MARGINS.MOBILE,
} as const;

const TABLET = {
  columns: COLUMNS.TABLET,
  gutter: GUTTERS.TABLET_SPACING,
  numberOfGutters: GUTTERS.TABLET,
  margin: MARGINS.TABLET,
} as const;

const DESKTOP = {
  columns: COLUMNS.DESKTOP,
  gutter: GUTTERS.DESKTOP_SPACING,
  numberOfGutters: GUTTERS.DESKTOP,
  margin: MARGINS.DESKTOP,
} as const;

const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

const SPACING = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  64: 64,
  80: 80,
  96: 96,
  128: 128,
  160: 160,
  192: 192,
  224: 224,
} as const;

const SCREENS = {
  base: em(1),
  xxxs: em(375),
  xxs: em(480),
  xs: em(576),
  sm: em(640),
  md: em(768),
  l: em(930),
  lg: em(1024),
  xl: em(1280),
  xxl: em(1440),
  maxGridWidth: em(2560),
} as const;

const MAX = {
  designWidth: 1440,
  width: 1940,
};

export {
  SCREENS,
  COLORS,
  COLUMNS,
  SPACING,
  FONT_WEIGHTS,
  GUTTERS,
  MARGINS,
  MOBILE,
  TABLET,
  DESKTOP,
  MAX,
};
