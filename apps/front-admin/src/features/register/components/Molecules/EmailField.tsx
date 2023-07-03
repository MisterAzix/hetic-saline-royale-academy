import React, { useId } from 'react';
import { IRegisterForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface EmailFieldProps {
  control: Control<IRegisterForm>;
}

const EmailField = ({ control }: EmailFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          name={'email'}
          label={'Email'}
          placeholder="you@company.com"
          helperText={"L'email est obligatoire"}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default EmailField;
