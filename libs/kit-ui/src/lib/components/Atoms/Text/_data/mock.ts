import { COLORS } from '../../../../../../styles/theme';
import { Colors } from '../../../../../../styles/@types';

export const tagName = [
  'p',
  'address',
  'a',
  'div',
  'span',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

export const colorPresets = Object.keys(COLORS) as Colors[];
