import { createTheme } from '@mui/material';
import {
  FONT_SIZES,
  FONT_STYLES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  ROOT_FONT_SIZE,
} from './typograhy';
import { TEXT_PRESETS } from './typograhy/text-presets';
import type { ColorInHexadecimal, Colors, MuiColors } from './@types';
const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  'gray-25': '#FCFCFD',
  'gray-50': '#F9FAFB',
  'gray-100': '#F2F4F7',
  'gray-200': '#EAECF0',
  'gray-300': '#D0D5DD',
  'gray-400': '#98A2B3',
  'gray-500': '#667085',
  'gray-600': '#475467',
  'gray-700': '#344054',
  'gray-800': '#1D2939',
  'gray-900': '#101828',
  'primary-25': '#FCFAFF',
  'primary-50': '#F9F5FF',
  'primary-100': '#F4EBFF',
  'primary-200': '#E9D7FE',
  'primary-300': '#D6BBFB',
  'primary-400': '#B692F6',
  'primary-500': '#9E77ED',
  'primary-600': '#7F56D9',
  'primary-700': '#6941C6',
  'primary-800': '#53389E',
  'primary-900': '#42307D',
  'error-25': '#FFFBFA',
  'error-50': '#FEF3F2',
  'error-100': '#FEE4E2',
  'error-200': '#FECDCA',
  'error-300': '#FDA29B',
  'error-400': '#F97066',
  'error-500': '#F04438',
  'error-600': '#D92D20',
  'error-700': '#B42318',
  'error-800': '#912018',
  'error-900': '#7A271A',
  'warning-25': '#FFFCF5',
  'warning-50': '#FFFAEB',
  'warning-100': '#FEF0C7',
  'warning-200': '#FEDF89',
  'warning-300': '#FEC84B',
  'warning-400': '#FDB022',
  'warning-500': '#F79009',
  'warning-600': '#DC6803',
  'warning-700': '#B54708',
  'warning-800': '#93370D',
  'warning-900': '#7A2E0E',
  'success-25': '#F6FEF9',
  'success-50': '#ECFDF3',
  'success-100': '#D1FADF',
  'success-200': '#A6F4C5',
  'success-300': '#6CE9A6',
  'success-400': '#32D583',
  'success-500': '#12B76A',
  'success-600': '#039855',
  'success-700': '#027A48',
  'success-800': '#05603A',
  'success-900': '#054F31',
  'blue-gray-25': '#FCFCFD',
  'blue-gray-50': '#F8F9FC',
  'blue-gray-100': '#EAECF5',
  'blue-gray-200': '#D5D9EB',
  'blue-gray-300': '#AFB5D9',
  'blue-gray-400': '#717BBC',
  'blue-gray-500': '#4E5BA6',
  'blue-gray-600': '#3E4784',
  'blue-gray-700': '#363F72',
  'blue-gray-800': '#293056',
  'blue-gray-900': '#101323',
  'blue-light-25': '#F5FBFF',
  'blue-light-50': '#F0F9FF',
  'blue-light-100': '#E0F2FE',
  'blue-light-200': '#B9E6FE',
  'blue-light-300': '#7CD4FD',
  'blue-light-400': '#36BFFA',
  'blue-light-500': '#0BA5EC',
  'blue-light-600': '#0086C9',
  'blue-light-700': '#026AA2',
  'blue-light-800': '#065986',
  'blue-light-900': '#0B4A6F',
  'blue-25': '#F5FAFF',
  'blue-50': '#EFF8FF',
  'blue-100': '#D1E9FF',
  'blue-200': '#B2DDFF',
  'blue-300': '#84CAFF',
  'blue-400': '#53B1FD',
  'blue-500': '#2E90FA',
  'blue-600': '#1570EF',
  'blue-700': '#175CD3',
  'blue-800': '#1849A9',
  'blue-900': '#194185',
  'indigo-25': '#F5FAFF',
  'indigo-50': '#EEF4FF',
  'indigo-100': '#E0EAFF',
  'indigo-200': '#C7D7FE',
  'indigo-300': '#A4BCFD',
  'indigo-400': '#8098F9',
  'indigo-500': '#6172F3',
  'indigo-600': '#444CE7',
  'indigo-700': '#3538CD',
  'indigo-800': '#2D31A6',
  'indigo-900': '#3E1C96',
  'purple-25': '#FAFAFF',
  'purple-50': '#F4F3FF',
  'purple-100': '#EBE9FE',
  'purple-200': '#D9D6FE',
  'purple-300': '#BDB4FE',
  'purple-400': '#9B8AFB',
  'purple-500': '#7A5AF8',
  'purple-600': '#6938EF',
  'purple-700': '#5925DC',
  'purple-800': '#4A1FB8',
  'purple-900': '#3E1C96',
  'pink-25': '#FEF6FB',
  'pink-50': '#FDF2FA',
  'pink-100': '#FCE7F6',
  'pink-200': '#FCCEEE',
  'pink-300': '#FAA7E0',
  'pink-400': '#F670C7',
  'pink-500': '#EE46BC',
  'pink-600': '#DD2590',
  'pink-700': '#C11574',
  'pink-800': '#9E165F',
  'pink-900': '#851651',
  'dark-pink-25': '#FFF5F6',
  'dark-pink-50': '#FFF1F3',
  'dark-pink-100': '#FFE4E8',
  'dark-pink-200': '#FECDD6',
  'dark-pink-300': '#FEA3B4',
  'dark-pink-400': '#FD6F8E',
  'dark-pink-500': '#F63D68',
  'dark-pink-600': '#E31B54',
  'dark-pink-700': '#C01048',
  'dark-pink-800': '#A11043',
  'dark-pink-900': '#89123E',
  'orange-25': '#FFFAF5',
  'orange-50': '#FFF6ED',
  'orange-100': '#FFEAD5',
  'orange-200': '#FDDCAB',
  'orange-300': '#FEB273',
  'orange-400': '#FD853A',
  'orange-500': '#FB6514',
  'orange-600': '#EC4A0A',
  'orange-700': '#C4320A',
  'orange-800': '#9C2A10',
  'orange-900': '#7E2410',
} as const satisfies Record<Colors, ColorInHexadecimal>;

const colorsFormattedForMuiPalette = {} as MuiColors;

for (const key in COLORS) {
  const colorKey = key as Colors;
  colorsFormattedForMuiPalette[colorKey] = { main: COLORS[colorKey] };
}

const COLUMNS = {
  MOBILE: 4,
  TABLET: 6,
  DESKTOP: 12,
} as const;

const GUTTERS = {
  MOBILE: 3,
  TABLET: 5,
  DESKTOP: 11,
  MOBILE_SPACING: '16px',
  TABLET_SPACING: '32px',
  DESKTOP_SPACING: '32px',
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

const SPACING = {
  '4': '4px',
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '64': '64px',
  '80': '80px',
  '96': '96px',
  '128': '128px',
  '160': '160px',
  '192': '192px',
  '224': '224px',
} as const;

const SCREENS = {
  base: `${1 / ROOT_FONT_SIZE}em`,
  xxxs: `${375 / ROOT_FONT_SIZE}em`,
  xxs: `${480 / ROOT_FONT_SIZE}em`,
  xs: `${576 / ROOT_FONT_SIZE}em`,
  sm: `${640 / ROOT_FONT_SIZE}em`,
  md: `${768 / ROOT_FONT_SIZE}em`,
  l: `${930 / ROOT_FONT_SIZE}em`,
  lg: `${1024 / ROOT_FONT_SIZE}em`,
  xl: `${1280 / ROOT_FONT_SIZE}em`,
  xxl: `${1440 / ROOT_FONT_SIZE}em`,
  maxGridWidth: `${2560 / ROOT_FONT_SIZE}em`,
} as const;

const MAX = {
  designWidth: 1440,
  width: 1940,
};

const muiTheme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    ...TEXT_PRESETS,
  },
  palette: {
    ...colorsFormattedForMuiPalette,
  },
});

export const THEME = [
  SCREENS,
  COLORS,
  COLUMNS,
  SPACING,
  GUTTERS,
  MARGINS,
  MOBILE,
  TABLET,
  DESKTOP,
  FONT_STYLES,
  FONT_WEIGHTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  MAX,
] as const;

export {
  SCREENS,
  COLORS,
  COLUMNS,
  SPACING,
  GUTTERS,
  MARGINS,
  MOBILE,
  TABLET,
  DESKTOP,
  MAX,
  muiTheme,
};
