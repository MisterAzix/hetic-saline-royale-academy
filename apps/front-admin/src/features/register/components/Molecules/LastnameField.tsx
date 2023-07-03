import React, { useId } from 'react';
import { IRegisterForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface EmailFieldProps {
  control: Control<IRegisterForm>;
}

const LastnameField = ({ control }: EmailFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          name={'lastname'}
          label={'Lastname'}
          placeholder="Last name"
          helperText={'The lastname is required'}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default LastnameField;
