export type ColorInHexadecimal = `#${string}`;

type ColorName =
  | 'blue'
  | 'blue-gray'
  | 'blue-light'
  | 'dark-pink'
  | 'error'
  | 'gray'
  | 'indigo'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'success'
  | 'warning';

type ColorShade =
  | '25'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Colors = `${ColorName}-${ColorShade}` | 'white' | 'black';

export type MuiColors = Record<Colors, { main: ColorInHexadecimal }>;
