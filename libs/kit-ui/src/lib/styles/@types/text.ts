import { CSSProperties } from 'react';
import { StringToObject } from './utils';

export type FontStyles =
  | 'italic'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'normal';

export type FontWeightsInNumber = 400 | 500 | 600 | 700;

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
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

export type TextPresetsObject = StringToObject<TextPresets, CSSProperties>;

export type TextPresetsBoolean = StringToObject<
  `${Typography}-${FontWeight}`,
  boolean
>;
