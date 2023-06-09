import * as React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { palette } from '../../../palette';

interface CustomizedCheckboxProps extends CheckboxProps {
  label?: string;
}

const StyledCheckbox = styled('span')`
  background-color: ${palette.white};
  width: 16px;
  height: 16px;
  border: 1px solid ${palette.gray[300]};
  border-radius: 4px;
  transition: all 150ms ease;

  .Mui-focusVisible & {
    border: 1px solid ${palette.primary[300]};
    box-shadow: 0 0 0 4px ${palette.primary[100]};
    outline: none;
  }

  input:hover ~ & {
    background-color: ${palette.primary[50]};
    border: 1px solid ${palette.primary[600]};
  }

  input:disabled ~ & {
    background-color: ${palette.gray[100]};
    border: 1px solid ${palette.gray[200]};
  }
`;

const StyledCheckboxIcon = styled(StyledCheckbox)`
  background-color: ${palette.primary[50]};
  border: 1px solid ${palette.primary[600]};

  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L3.5 6.5L1 4' stroke='%237F56D9' stroke-width='1.6666' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }
`;

function _Checkbox({ label = '', ...props }: CustomizedCheckboxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disableRipple
          checkedIcon={<StyledCheckboxIcon />}
          icon={<StyledCheckbox />}
          inputProps={{ 'aria-label': label }}
          {...props}
        />
      }
      label={label}
    />
  );
}

export default _Checkbox;
