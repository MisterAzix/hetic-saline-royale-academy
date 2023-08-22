import React, { useId } from 'react';
import { IUpdateUserForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

interface EmailFieldProps {
  control: Control<IUpdateUserForm>;
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
          placeholder="john@example.com"
          helperText={"L'email est obligatoire"}
          error={!!error}
          icon={<MailOutlineIcon />}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default EmailField;
