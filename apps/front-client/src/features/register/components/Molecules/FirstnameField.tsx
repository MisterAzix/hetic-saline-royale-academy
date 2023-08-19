import React, { useId } from 'react';
import { IRegisterForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface EmailFieldProps {
  control: Control<IRegisterForm>;
}

const FirstnameField = ({ control }: EmailFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="firstName"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          name={'firstName'}
          label={'Prénom'}
          placeholder="John"
          helperText={'Le prénom est requis'}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default FirstnameField;
