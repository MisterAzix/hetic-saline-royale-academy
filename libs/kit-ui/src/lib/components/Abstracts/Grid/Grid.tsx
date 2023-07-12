import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { from, getColumnConfig, getTheme } from '../../../styles/mixins';
import { MAX } from '../../../styles/theme';

const GridComponent = styled.section`
  display: grid;
  max-width: 100%;
  margin-inline: auto;
  ${getColumnConfig('mobile')};
  ${from('md', getColumnConfig('tablet'))}
  ${from('lg', getColumnConfig('desktop'))}
  ${from(
    'maxGridWidth',
    `
      width: ${getTheme(MAX, 'width')}px;
    `
  )}
`;

type GridProps = PropsWithChildren;

function Grid({ children }: GridProps) {
  return <GridComponent>{children}</GridComponent>;
}

export default Grid;
