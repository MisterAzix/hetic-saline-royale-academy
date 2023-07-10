import { PropsWithChildren } from 'react';
import { useFormControlContext } from '@mui/base';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { palette } from '../../../palette';
import { typography } from '../../../typography';

const StyledP = styled.p`
  ${typography.sm.regular};
  margin: 6px 0 0;

  &.error {
    color: ${palette.error[500]}};
  }

  &.disabled {
    color: ${palette.gray[500]};
  }
`;

const _HelperText = ({ children, ...props }: PropsWithChildren) => {
  const formControlContext = useFormControlContext();

  if (formControlContext === undefined) {
    return null;
  }

  const { error, disabled } = formControlContext;

  return error ? (
    <StyledP
      {...props}
      className={clsx(error ? 'error' : '', disabled && 'disabled')}
    >
      {children}
    </StyledP>
  ) : null;
};

export default _HelperText;
