import { ColumnConfig, ScreenSize } from '../../@types';
import { getTheme } from '../get-theme';
import { DESKTOP, MOBILE, TABLET } from '../../theme';

export const getGridColumnWidth = (
  size: ColumnConfig,
  numberOfColumns: number
) => {
  let sizeConfig: ScreenSize;
  switch (size) {
    case 'mobile':
      sizeConfig = MOBILE;
      break;
    case 'tablet':
      sizeConfig = TABLET;
      break;
    case 'desktop':
      sizeConfig = DESKTOP;
      break;
    default:
      console.warn(
        'Please use one of this three grid presets mobile, tablet or desktop.'
      );
      return;
  }

  if (!sizeConfig) return;
  const withoutExtraGutter = numberOfColumns - 1;

  if (numberOfColumns === 1) {
    return `calc((100vw - (${getTheme(sizeConfig, 'margin')} * 2) - ${getTheme(
      sizeConfig,
      'gutter'
    )} * ${getTheme(sizeConfig, 'numberOfGutters')}) / ${getTheme(
      sizeConfig,
      'columns'
    )} + ${getTheme(sizeConfig, 'gutter')} * ${withoutExtraGutter})`;
  }

  return `calc((100vw - (${getTheme(sizeConfig, 'margin')} * 2) - ${getTheme(
    sizeConfig,
    'gutter'
  )} * ${getTheme(sizeConfig, 'numberOfGutters')}) / ${getTheme(
    sizeConfig,
    'columns'
  )} * ${numberOfColumns} + ${getTheme(
    sizeConfig,
    'gutter'
  )} * ${withoutExtraGutter})`;
};
