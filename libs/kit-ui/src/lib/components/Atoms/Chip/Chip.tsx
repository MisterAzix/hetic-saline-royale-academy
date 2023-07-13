import * as React from 'react';
import { Chip } from '@mui/material';
import styled from '@emotion/styled';

export type ChipProps = {
  children?: React.ReactNode;
  color?: string;
};

const StyledChip = styled(Chip)`
  height: 28px;
  border-radius: 14px;
`;

function _Chip({ children, color }: ChipProps) {
  return (
    <StyledChip
      label={children}
      sx={{
        backgroundColor: `${color}.main`,
        color: 'gray-25.main',
      }}
    />
  );
}

export default _Chip;
