import React, { useId } from 'react';
import { IUpdateUserForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface EmailFieldProps {
  control: Control<IUpdateUserForm>;
}

const FirstnameField = ({ control }: EmailFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="first_name"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          name={'first_name'}
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
