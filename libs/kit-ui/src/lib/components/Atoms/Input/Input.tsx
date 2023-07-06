import { Input, inputBaseClasses } from '@mui/material';
import { useFormControlContext } from '@mui/base';
import styled from '@emotion/styled';
import { palette } from '../../../palette';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import { typography } from '../../../typography';

const StyledInput = styled(Input)`
  &.${inputBaseClasses.root}.${inputBaseClasses.disabled} {
    border-color: ${palette.gray[300]};
    background: ${palette.gray[50]};
  }

  .${inputBaseClasses.input} {
    padding: 0 8px 0 0;
    color: ${palette.gray[500]};
  }

  ${typography.md.regular};
  width: 100%;
  color: ${palette.gray[900]};
  background: ${palette.white};
  border: 1px solid ${palette.gray[300]};
  border-radius: 8px;
  padding: 12px 16px;

  &::before,
  &::after {
    content: none;
  }

  &:hover {
    border-color: ${palette.gray[400]};
  }

  &:focus-within {
    border-color: ${palette.primary[300]};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
      0 0 0 4px ${palette.primary[100]};
    outline: none;
  }

  &.Mui-error,
  &.${inputBaseClasses.error} {
    border-color: ${palette.error[300]};
    background: ${palette.white};

    &:focus-within {
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
        0 0 0 4px ${palette.error[100]};
    }
  }
`;

const _Input = (props: ComponentProps<typeof Input>) => {
  const formControlContext = useFormControlContext();

  if (formControlContext === undefined) {
    return null;
  }

  const { error } = formControlContext;

  return (
    <StyledInput
      {...props}
      className={clsx(error ? inputBaseClasses.error : '')}
    />
  );
};

export default _Input;
