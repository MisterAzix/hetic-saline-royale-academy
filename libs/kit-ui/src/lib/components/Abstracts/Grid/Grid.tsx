import styled, { css } from 'styled-components';
import { from, getColumnConfig, getTheme } from '../../../../../styles/mixins';
import { MAX } from '../../../../../styles/theme';
import { PropsWithChildren } from 'react';

const GridComponent = styled.section<{ isLarge?: boolean }>`
  display: grid;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  margin-inline: auto;
  ${getColumnConfig('mobile')};
  ${from('md', getColumnConfig('tablet'))}
  ${from('lg', getColumnConfig('desktop'))}
  ${from(
    'maxGridWidth',
    css`
      width: ${getTheme(MAX, 'width')}px;
    `
  )}
`;

type GridProps = PropsWithChildren;

function Grid({ children }: GridProps) {
  return <GridComponent>{children}</GridComponent>;
}

export default Grid;
