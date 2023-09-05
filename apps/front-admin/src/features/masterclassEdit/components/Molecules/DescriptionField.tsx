import React, { useId } from 'react';
import { IMasterclassForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface DescriptionFieldProps {
  control: Control<IMasterclassForm>;
}

const DescriptionField = ({ control }: DescriptionFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="description"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          label={'Description'}
          placeholder="Présentez la masterclass aux utilisateurs."
          helperText={error?.message || ''}
          error={!!error}
          onChange={onChange}
          value={value}
          multiline
          rows={5}
        />
      )}
    />
  );
};

export default DescriptionField;
