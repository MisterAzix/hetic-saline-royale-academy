import { getTheme } from '../get-theme';
import { DESKTOP, MOBILE, TABLET } from '../../theme';
import { ColumnConfig } from '../../@types';

export const getColumnConfig = (config: ColumnConfig, withDebug?: boolean) => {
  switch (config) {
    case 'mobile':
      return `
        padding-inline: ${getTheme(MOBILE, 'margin')}px;
        grid-template-columns: repeat(${getTheme(MOBILE, 'columns')}, 1fr);
        column-gap: ${getTheme(MOBILE, 'gutter')}px;
        grid-template-rows: 1fr;
        ${withDebug ? `background: yellow;` : ''}
      `;

    case 'tablet':
      return `
        padding-inline: ${getTheme(TABLET, 'margin')}px;
        grid-template-columns: repeat(${getTheme(TABLET, 'columns')}, 1fr);
        column-gap: ${getTheme(TABLET, 'gutter')}px;
        grid-template-rows: 1fr;
        ${withDebug ? `background: red;` : ''}
      `;

    case 'desktop':
      return `
        padding-inline: ${getTheme(DESKTOP, 'margin')}px;
        grid-template-columns: repeat(${getTheme(DESKTOP, 'columns')}, 1fr);
        column-gap: ${getTheme(DESKTOP, 'gutter')}px;
        grid-template-rows: 1fr;
        ${withDebug ? `background: red;` : ''}
      `;

    default:
      console.warn(
        'Please, use one of this three grid presets mobile, tablet or desktop.'
      );
  }
};
