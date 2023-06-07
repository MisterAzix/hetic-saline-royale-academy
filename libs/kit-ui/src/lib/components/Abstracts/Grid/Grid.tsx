import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { from, getColumnConfig, getTheme } from '../../../../../styles/mixins';
import { MAX } from '../../../../../styles/theme';

const GridComponent = styled.section`
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
