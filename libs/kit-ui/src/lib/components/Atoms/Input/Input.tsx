import styled from 'styled-components';
import Input, { inputClasses } from '@mui/base/Input';
import { palette } from '../../../palette';
import { useFormControlContext } from '@mui/base';
import { ComponentProps, useEffect, useState } from 'react';
import clsx from 'clsx';
import { typography } from '../../../typography';

const StyledInput = styled(Input)`
  &.${inputClasses.root}.${inputClasses.error} {
    .${inputClasses.input} {
      border-color: ${palette.error[300]};

      &:focus {
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
          0 0 0 4px ${palette.error[100]};
      }
    }
  }

  &.${inputClasses.root}.${inputClasses.disabled} {
    .${inputClasses.input} {
      border-color: ${palette.gray[300]};
      color: ${palette.gray[500]};
      background: ${palette.gray[50]};
    }
  }

  .${inputClasses.input} {
    ${typography.md.regular};
    width: 320px;
    color: ${palette.gray[900]};
    background: ${palette.white};
    border: 1px solid ${palette.gray[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      border-color: ${palette.gray[400]};
    }

    &:focus {
      border-color: ${palette.primary[300]};
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
        0 0 0 4px ${palette.primary[100]};
      outline: none;
    }
  }
`;

const _Input = (props: ComponentProps<typeof Input>) => {
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

  const { error, required, filled } = formControlContext;
  const showRequiredError = isDirty && required && !filled;

  return (
    <StyledInput
      {...props}
      className={clsx(error || showRequiredError ? inputClasses.error : '')}
    />
  );
};

export default _Input;
