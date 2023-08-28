import { Card } from '@mui/material';
import styled from '@emotion/styled';
import { palette } from '../../../palette';
import { ComponentProps } from 'react';


const StyledProgressCard = styled(Card)`
  height : 200px;
  width : 200px;
  background-color : ${palette.primary[600]};
  border-radius : 8px;
`

const _ProgressCard = ({
  children,
  numberOfChildren,
  ...props
}: ComponentProps<typeof Card> & {numberOfChildren ?: number, orientation?: 'column' | 'row'}) => {
  return (
    <StyledProgressCard  {...props}>
      {children}
    </StyledProgressCard>
  );
};

export default _ProgressCard;
