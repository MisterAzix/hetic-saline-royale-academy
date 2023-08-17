import React from 'react';
import { Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import EmailField from '../Molecules/EmailField';
import PasswordField from '../Molecules/PasswordField';
import { IRegisterForm } from '../../types';
import { useRegisterFormSubmit, useLoginFormValidation } from '../../hooks';
import {
  Button,
  Checkbox,
  palette,
  typography,
} from '@hetic-saline-royale-academy/kit-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FirstnameField from '../Molecules/FirstnameField';
import LastnameField from '../Molecules/LastnameField';

const FormContainer = styled.form`
  max-width: 360px;
  width: 100%;
`;

const Title = styled(Typography)`
  ${typography.xl.semiBold}
  color: ${palette.gray[900]};
`;

const SubTitle = styled(Typography)`
  ${typography.md.regular}
  color: ${palette.gray[500]};
`;

const initialValues: IRegisterForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const loginFormValidation = useLoginFormValidation();
  const { submitRegisterForm, isError } = useRegisterFormSubmit();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(loginFormValidation),
    mode: 'onBlur',
  });

  return (
    <FormContainer>
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Title>Study with the world’s best musicians!</Title>
          <SubTitle>
            Experience immersive video masterclasses wherever you are. New
            masterclasses added every month.
          </SubTitle>
        </Stack>
        <Stack spacing={4}>
          <Stack spacing={3}>
            <Stack spacing={2} direction={'row'}>
              <FirstnameField control={control} />
              <LastnameField control={control} />
            </Stack>
            <EmailField control={control} />
            <PasswordField control={control} />
            <Checkbox label={'You agree to our friendly privacy policy.'} />
          </Stack>

          {isError && (
            <Typography color={'error'} fontSize={14}>
              Erreur lors de la l&apos;inscription
            </Typography>
          )}

          <Button
            onClick={handleSubmit((data: IRegisterForm) =>
              submitRegisterForm(data)
            )}
            color={'primary'}
            type={'submit'}
          >
            Sign up
          </Button>
        </Stack>
      </Stack>
    </FormContainer>
  );
};

export default RegisterForm;
