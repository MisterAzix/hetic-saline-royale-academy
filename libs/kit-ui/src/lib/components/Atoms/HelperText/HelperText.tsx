import { PropsWithChildren, useEffect, useState } from 'react';
import { useFormControlContext } from '@mui/base';
import styled from 'styled-components';
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
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (formControlContext?.filled) {
      setIsDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { error, required, filled, disabled } = formControlContext;
  const showRequiredError = isDirty && required && !filled;

  return showRequiredError ? (
    <StyledP
      {...props}
      className={clsx(
        error || showRequiredError ? 'error' : '',
        disabled && 'disabled'
      )}
    >
      {children}
    </StyledP>
  ) : null;
};

export default _HelperText;
