import React, { useId, useState } from 'react';
import { IRegisterForm } from '../../types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordFieldProps {
  control: Control<IRegisterForm>;
}

const PasswordField = ({ control }: PasswordFieldProps) => {
  const id = useId();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name="password"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputGroup
          id={id}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <IconButton
              sx={{ padding: 0 }}
              size={'small'}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
          name="password"
          label={'Mot de passe'}
          placeholder={'**********'}
          helperText={'Le mot de passe est obligatoire'}
          error={!!error}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

export default PasswordField;
