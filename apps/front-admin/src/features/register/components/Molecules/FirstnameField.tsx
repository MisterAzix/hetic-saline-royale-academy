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
      name="firstname"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          name={'firstname'}
          label={'Firstname'}
          placeholder="First name"
          helperText={'The firstname is required'}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default FirstnameField;
