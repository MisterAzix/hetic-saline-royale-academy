import React, { useId } from 'react';
import { IMasterclassForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

interface TitleFieldProps {
  control: Control<IMasterclassForm>;
}

const TitleField = ({ control }: TitleFieldProps) => {
  const id = useId();

  return (
    <Controller
      name="title"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          label={'Title'}
          placeholder="Ajoutez un titre pour décrire votre masterclass"
          helperText={'Le titre est obligatoire'}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default TitleField;
