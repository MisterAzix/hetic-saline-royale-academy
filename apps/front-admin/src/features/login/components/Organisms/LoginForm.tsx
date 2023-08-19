import React from 'react';
import { Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import EmailField from '../Molecules/EmailField';
import PasswordField from '../Molecules/PasswordField';
import { ILoginForm } from '../../types';
import { useLoginFormSubmit, useLoginFormValidation } from '../../hooks';
import {
  Button,
  palette,
  typography,
} from '@hetic-saline-royale-academy/kit-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

const initialValues: ILoginForm = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const loginFormValidation = useLoginFormValidation();
  const { submitLoginForm, isError } = useLoginFormSubmit();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(loginFormValidation),
    mode: 'onBlur',
  });

  return (
    <FormContainer>
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Title>Bienvenue!</Title>
          <SubTitle>
            Vous êtes ici sur le panneau d&apos;administration de Saline Royale
            Academy.
          </SubTitle>
        </Stack>
        <Stack spacing={4}>
          <Stack spacing={3}>
            <EmailField control={control} />
            <PasswordField control={control} />
          </Stack>

          {isError && (
            <Typography color={'error'} fontSize={14}>
              L’email ou le mot de passe renseignés sont incorrects
            </Typography>
          )}

          <Button
            onClick={handleSubmit((data: ILoginForm) => submitLoginForm(data))}
            color={'primary'}
            type={'submit'}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </FormContainer>
  );
};

export default LoginForm;
