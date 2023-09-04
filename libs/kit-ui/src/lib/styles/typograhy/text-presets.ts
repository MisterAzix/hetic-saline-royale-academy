import {
  FontWeight,
  FontWeightsInNumber,
  TextPresets,
  Typography,
} from '../@types';
import { getTheme } from '../mixins';
import { FONT_SIZES, FONT_STYLES, FONT_WEIGHTS, LINE_HEIGHTS } from './index';
import { raiseError } from '../../../../utils';

type Base = ReturnType<typeof getBaseText>;

const getBaseText = (textPreset: Typography) => ({
  fontSize: getTheme(FONT_SIZES, textPreset),
  lineHeight: getTheme(LINE_HEIGHTS, textPreset),
  fontStyle: getTheme(FONT_STYLES, 'normal'),
});

const base = {
  'text-xs': {
    ...getBaseText('text-xs'),
  },
  'text-sm': {
    ...getBaseText('text-sm'),
  },
  'text-md': {
    ...getBaseText('text-md'),
  },
  'text-lg': {
    ...getBaseText('text-lg'),
  },
  'text-xl': {
    ...getBaseText('text-xl'),
  },
  'display-xs': {
    ...getBaseText('display-xs'),
  },
  'display-sm': {
    ...getBaseText('display-sm'),
  },
  'display-md': {
    ...getBaseText('display-md'),
  },
  'display-lg': {
    ...getBaseText('display-lg'),
  },
  'display-xl': {
    ...getBaseText('display-xl'),
  },
  'display-2xl': {
    ...getBaseText('display-2xl'),
  },
} as const satisfies Record<Typography, Base>;

export const textPresets = [
  'text-xs-regular',
  'text-xs-medium',
  'text-xs-semibold',
  'text-xs-bold',
  'text-sm-regular',
  'text-sm-medium',
  'text-sm-semibold',
  'text-sm-bold',
  'text-md-regular',
  'text-md-medium',
  'text-md-semibold',
  'text-md-bold',
  'text-lg-regular',
  'text-lg-medium',
  'text-lg-semibold',
  'text-lg-bold',
  'text-xl-regular',
  'text-xl-medium',
  'text-xl-semibold',
  'text-xl-bold',
  'display-xs-regular',
  'display-xs-medium',
  'display-xs-semibold',
  'display-xs-bold',
  'display-sm-regular',
  'display-sm-medium',
  'display-sm-semibold',
  'display-sm-bold',
  'display-md-regular',
  'display-md-medium',
  'display-md-semibold',
  'display-md-bold',
  'display-lg-regular',
  'display-lg-medium',
  'display-lg-semibold',
  'display-lg-bold',
  'display-xl-regular',
  'display-xl-medium',
  'display-xl-semibold',
  'display-xl-bold',
  'display-2xl-regular',
  'display-2xl-medium',
  'display-2xl-semibold',
  'display-2xl-bold',
] satisfies TextPresets[];

const generateTextPreset = () => {
  const textPresetsObject = {} as Record<
    TextPresets,
    Base & { fontWeight: FontWeightsInNumber }
  >;

  textPresets.forEach((preset) => {
    const splittedPreset = preset.split('-');

    const fontWeight =
      (splittedPreset.at(-1) as FontWeight) ??
      raiseError(
        'Something went wrong while generating the text presets check if the text presets array contain only text preset of this structure {text | display}-{size}-{fontWeight}.'
      );

    const [presetTitle, presetSize] = splittedPreset;

    const baseProperty = `${presetTitle}-${presetSize}` as Typography;

    textPresetsObject[preset] = {
      ...base[baseProperty],
      fontWeight: getTheme(FONT_WEIGHTS, fontWeight),
    };
  });

  return textPresetsObject;
};

export const TEXT_PRESETS = generateTextPreset();
