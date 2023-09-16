import { ReactNode, useEffect, useState } from 'react';
import { useFormControlContext } from '@mui/base';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { palette } from '../../../palette';
import { typography } from '../../../typography';

const StyledP = styled.p`
  ${typography.sm.medium};
  margin: 0 0 6px;

  &.error {
    color: ${palette.error[500]};
  }

  &.disabled {
    color: ${palette.gray[500]};
  }
`;

const _Label = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const formControlContext = useFormControlContext();
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (formControlContext?.filled) {
      setIsDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled, disabled } = formControlContext;
  const showRequiredError = isDirty && required && !filled;

  return children ? (
    <StyledP
      className={clsx(
        className,
        error || showRequiredError ? 'error' : '',
        disabled && 'disabled'
      )}
    >
      {children}
      {required && ' *'}
    </StyledP>
  ) : null;
};

export default _Label;
