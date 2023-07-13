import type {
  TextPresetsBoolean,
  TextPresetsObject,
} from '@hetic-saline-royale-academy/kit-ui';
/**
 * @description
 * I don't really know why but eslint is complaining about this import,
 * but we need it to expand our types.
 * **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PaletteOptions, Palette } from '@mui/material';

/**
 * @description
 * We need to extend the MUI theme types to add our custom typography and colors.
 * Otherwise, we'll get a type error when trying to use them.
 *
 * This file is present in front-admin, front-client and kit-ui.
 * NX will throw a type error when trying to push if we don't put it in all workspaces.
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

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
    'gray-25': Palette['primary'];
    'gray-50': Palette['primary'];
    'gray-100': Palette['primary'];
    'gray-200': Palette['primary'];
    'gray-300': Palette['primary'];
    'gray-400': Palette['primary'];
    'gray-500': Palette['primary'];
    'gray-600': Palette['primary'];
    'gray-700': Palette['primary'];
    'gray-800': Palette['primary'];
    'gray-900': Palette['primary'];
    'primary-25': Palette['primary'];
    'primary-50': Palette['primary'];
    'primary-100': Palette['primary'];
    'primary-200': Palette['primary'];
    'primary-300': Palette['primary'];
    'primary-400': Palette['primary'];
    'primary-500': Palette['primary'];
    'primary-600': Palette['primary'];
    'primary-700': Palette['primary'];
    'primary-800': Palette['primary'];
    'primary-900': Palette['primary'];
    'error-25': Palette['primary'];
    'error-50': Palette['primary'];
    'error-100': Palette['primary'];
    'error-200': Palette['primary'];
    'error-300': Palette['primary'];
    'error-400': Palette['primary'];
    'error-500': Palette['primary'];
    'error-600': Palette['primary'];
    'error-700': Palette['primary'];
    'error-800': Palette['primary'];
    'error-900': Palette['primary'];
    'warning-25': Palette['primary'];
    'warning-50': Palette['primary'];
    'warning-100': Palette['primary'];
    'warning-200': Palette['primary'];
    'warning-300': Palette['primary'];
    'warning-400': Palette['primary'];
    'warning-500': Palette['primary'];
    'warning-600': Palette['primary'];
    'warning-700': Palette['primary'];
    'warning-800': Palette['primary'];
    'warning-900': Palette['primary'];
    'success-25': Palette['primary'];
    'success-50': Palette['primary'];
    'success-100': Palette['primary'];
    'success-200': Palette['primary'];
    'success-300': Palette['primary'];
    'success-400': Palette['primary'];
    'success-500': Palette['primary'];
    'success-600': Palette['primary'];
    'success-700': Palette['primary'];
    'success-800': Palette['primary'];
    'success-900': Palette['primary'];
    'blue-gray-25': Palette['primary'];
    'blue-gray-50': Palette['primary'];
    'blue-gray-100': Palette['primary'];
    'blue-gray-200': Palette['primary'];
    'blue-gray-300': Palette['primary'];
    'blue-gray-400': Palette['primary'];
    'blue-gray-500': Palette['primary'];
    'blue-gray-600': Palette['primary'];
    'blue-gray-700': Palette['primary'];
    'blue-gray-800': Palette['primary'];
    'blue-gray-900': Palette['primary'];
    'blue-light-25': Palette['primary'];
    'blue-light-50': Palette['primary'];
    'blue-light-100': Palette['primary'];
    'blue-light-200': Palette['primary'];
    'blue-light-300': Palette['primary'];
    'blue-light-400': Palette['primary'];
    'blue-light-500': Palette['primary'];
    'blue-light-600': Palette['primary'];
    'blue-light-700': Palette['primary'];
    'blue-light-800': Palette['primary'];
    'blue-light-900': Palette['primary'];
    'blue-25': Palette['primary'];
    'blue-50': Palette['primary'];
    'blue-100': Palette['primary'];
    'blue-200': Palette['primary'];
    'blue-300': Palette['primary'];
    'blue-400': Palette['primary'];
    'blue-500': Palette['primary'];
    'blue-600': Palette['primary'];
    'blue-700': Palette['primary'];
    'blue-800': Palette['primary'];
    'blue-900': Palette['primary'];
    'indigo-25': Palette['primary'];
    'indigo-50': Palette['primary'];
    'indigo-100': Palette['primary'];
    'indigo-200': Palette['primary'];
    'indigo-300': Palette['primary'];
    'indigo-400': Palette['primary'];
    'indigo-500': Palette['primary'];
    'indigo-600': Palette['primary'];
    'indigo-700': Palette['primary'];
    'indigo-800': Palette['primary'];
    'indigo-900': Palette['primary'];
    'purple-25': Palette['primary'];
    'purple-50': Palette['primary'];
    'purple-100': Palette['primary'];
    'purple-200': Palette['primary'];
    'purple-300': Palette['primary'];
    'purple-400': Palette['primary'];
    'purple-500': Palette['primary'];
    'purple-600': Palette['primary'];
    'purple-700': Palette['primary'];
    'purple-800': Palette['primary'];
    'purple-900': Palette['primary'];
    'pink-25': Palette['primary'];
    'pink-50': Palette['primary'];
    'pink-100': Palette['primary'];
    'pink-200': Palette['primary'];
    'pink-300': Palette['primary'];
    'pink-400': Palette['primary'];
    'pink-500': Palette['primary'];
    'pink-600': Palette['primary'];
    'pink-700': Palette['primary'];
    'pink-800': Palette['primary'];
    'pink-900': Palette['primary'];
    'dark-pink-25': Palette['primary'];
    'dark-pink-50': Palette['primary'];
    'dark-pink-100': Palette['primary'];
    'dark-pink-200': Palette['primary'];
    'dark-pink-300': Palette['primary'];
    'dark-pink-400': Palette['primary'];
    'dark-pink-500': Palette['primary'];
    'dark-pink-600': Palette['primary'];
    'dark-pink-700': Palette['primary'];
    'dark-pink-800': Palette['primary'];
    'dark-pink-900': Palette['primary'];
    'orange-25': Palette['primary'];
    'orange-50': Palette['primary'];
    'orange-100': Palette['primary'];
    'orange-200': Palette['primary'];
    'orange-300': Palette['primary'];
    'orange-400': Palette['primary'];
    'orange-500': Palette['primary'];
    'orange-600': Palette['primary'];
    'orange-700': Palette['primary'];
    'orange-800': Palette['primary'];
    'orange-900': Palette['primary'];
  }

  interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    'gray-25': PaletteOptions['primary'];
    'gray-50': PaletteOptions['primary'];
    'gray-100': PaletteOptions['primary'];
    'gray-200': PaletteOptions['primary'];
    'gray-300': PaletteOptions['primary'];
    'gray-400': PaletteOptions['primary'];
    'gray-500': PaletteOptions['primary'];
    'gray-600': PaletteOptions['primary'];
    'gray-700': PaletteOptions['primary'];
    'gray-800': PaletteOptions['primary'];
    'gray-900': PaletteOptions['primary'];
    'primary-25': PaletteOptions['primary'];
    'primary-50': PaletteOptions['primary'];
    'primary-100': PaletteOptions['primary'];
    'primary-200': PaletteOptions['primary'];
    'primary-300': PaletteOptions['primary'];
    'primary-400': PaletteOptions['primary'];
    'primary-500': PaletteOptions['primary'];
    'primary-600': PaletteOptions['primary'];
    'primary-700': PaletteOptions['primary'];
    'primary-800': PaletteOptions['primary'];
    'primary-900': PaletteOptions['primary'];
    'error-25': PaletteOptions['primary'];
    'error-50': PaletteOptions['primary'];
    'error-100': PaletteOptions['primary'];
    'error-200': PaletteOptions['primary'];
    'error-300': PaletteOptions['primary'];
    'error-400': PaletteOptions['primary'];
    'error-500': PaletteOptions['primary'];
    'error-600': PaletteOptions['primary'];
    'error-700': PaletteOptions['primary'];
    'error-800': PaletteOptions['primary'];
    'error-900': PaletteOptions['primary'];
    'warning-25': PaletteOptions['primary'];
    'warning-50': PaletteOptions['primary'];
    'warning-100': PaletteOptions['primary'];
    'warning-200': PaletteOptions['primary'];
    'warning-300': PaletteOptions['primary'];
    'warning-400': PaletteOptions['primary'];
    'warning-500': PaletteOptions['primary'];
    'warning-600': PaletteOptions['primary'];
    'warning-700': PaletteOptions['primary'];
    'warning-800': PaletteOptions['primary'];
    'warning-900': PaletteOptions['primary'];
    'success-25': PaletteOptions['primary'];
    'success-50': PaletteOptions['primary'];
    'success-100': PaletteOptions['primary'];
    'success-200': PaletteOptions['primary'];
    'success-300': PaletteOptions['primary'];
    'success-400': PaletteOptions['primary'];
    'success-500': PaletteOptions['primary'];
    'success-600': PaletteOptions['primary'];
    'success-700': PaletteOptions['primary'];
    'success-800': PaletteOptions['primary'];
    'success-900': PaletteOptions['primary'];
    'blue-gray-25': PaletteOptions['primary'];
    'blue-gray-50': PaletteOptions['primary'];
    'blue-gray-100': PaletteOptions['primary'];
    'blue-gray-200': PaletteOptions['primary'];
    'blue-gray-300': PaletteOptions['primary'];
    'blue-gray-400': PaletteOptions['primary'];
    'blue-gray-500': PaletteOptions['primary'];
    'blue-gray-600': PaletteOptions['primary'];
    'blue-gray-700': PaletteOptions['primary'];
    'blue-gray-800': PaletteOptions['primary'];
    'blue-gray-900': PaletteOptions['primary'];
    'blue-light-25': PaletteOptions['primary'];
    'blue-light-50': PaletteOptions['primary'];
    'blue-light-100': PaletteOptions['primary'];
    'blue-light-200': PaletteOptions['primary'];
    'blue-light-300': PaletteOptions['primary'];
    'blue-light-400': PaletteOptions['primary'];
    'blue-light-500': PaletteOptions['primary'];
    'blue-light-600': PaletteOptions['primary'];
    'blue-light-700': PaletteOptions['primary'];
    'blue-light-800': PaletteOptions['primary'];
    'blue-light-900': PaletteOptions['primary'];
    'blue-25': PaletteOptions['primary'];
    'blue-50': PaletteOptions['primary'];
    'blue-100': PaletteOptions['primary'];
    'blue-200': PaletteOptions['primary'];
    'blue-300': PaletteOptions['primary'];
    'blue-400': PaletteOptions['primary'];
    'blue-500': PaletteOptions['primary'];
    'blue-600': PaletteOptions['primary'];
    'blue-700': PaletteOptions['primary'];
    'blue-800': PaletteOptions['primary'];
    'blue-900': PaletteOptions['primary'];
    'indigo-25': PaletteOptions['primary'];
    'indigo-50': PaletteOptions['primary'];
    'indigo-100': PaletteOptions['primary'];
    'indigo-200': PaletteOptions['primary'];
    'indigo-300': PaletteOptions['primary'];
    'indigo-400': PaletteOptions['primary'];
    'indigo-500': PaletteOptions['primary'];
    'indigo-600': PaletteOptions['primary'];
    'indigo-700': PaletteOptions['primary'];
    'indigo-800': PaletteOptions['primary'];
    'indigo-900': PaletteOptions['primary'];
    'purple-25': PaletteOptions['primary'];
    'purple-50': PaletteOptions['primary'];
    'purple-100': PaletteOptions['primary'];
    'purple-200': PaletteOptions['primary'];
    'purple-300': PaletteOptions['primary'];
    'purple-400': PaletteOptions['primary'];
    'purple-500': PaletteOptions['primary'];
    'purple-600': PaletteOptions['primary'];
    'purple-700': PaletteOptions['primary'];
    'purple-800': PaletteOptions['primary'];
    'purple-900': PaletteOptions['primary'];
    'pink-25': PaletteOptions['primary'];
    'pink-50': PaletteOptions['primary'];
    'pink-100': PaletteOptions['primary'];
    'pink-200': PaletteOptions['primary'];
    'pink-300': PaletteOptions['primary'];
    'pink-400': PaletteOptions['primary'];
    'pink-500': PaletteOptions['primary'];
    'pink-600': PaletteOptions['primary'];
    'pink-700': PaletteOptions['primary'];
    'pink-800': PaletteOptions['primary'];
    'pink-900': PaletteOptions['primary'];
    'dark-pink-25': PaletteOptions['primary'];
    'dark-pink-50': PaletteOptions['primary'];
    'dark-pink-100': PaletteOptions['primary'];
    'dark-pink-200': PaletteOptions['primary'];
    'dark-pink-300': PaletteOptions['primary'];
    'dark-pink-400': PaletteOptions['primary'];
    'dark-pink-500': PaletteOptions['primary'];
    'dark-pink-600': PaletteOptions['primary'];
    'dark-pink-700': PaletteOptions['primary'];
    'dark-pink-800': PaletteOptions['primary'];
    'dark-pink-900': PaletteOptions['primary'];
    'orange-25': PaletteOptions['primary'];
    'orange-50': PaletteOptions['primary'];
    'orange-100': PaletteOptions['primary'];
    'orange-200': PaletteOptions['primary'];
    'orange-300': PaletteOptions['primary'];
    'orange-400': PaletteOptions['primary'];
    'orange-500': PaletteOptions['primary'];
    'orange-600': PaletteOptions['primary'];
    'orange-700': PaletteOptions['primary'];
    'orange-800': PaletteOptions['primary'];
    'orange-900': PaletteOptions['primary'];
  }
}
