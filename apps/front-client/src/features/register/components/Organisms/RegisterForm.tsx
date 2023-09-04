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
  first_name: '',
  last_name: '',
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
    <FormContainer
      onSubmit={handleSubmit((data: IRegisterForm) => submitRegisterForm(data))}
    >
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Title>Étudier avec les meilleurs musiciens du monde !</Title>
          <SubTitle>
            Faites l&apos;expérience de masterclasses vidéo immersives où que
            vous soyez. De nouvelles masterclasses sont ajoutées chaque mois.
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
            <Checkbox label={'Acceptez notre politique de confidentialité.'} />
          </Stack>

          {isError && (
            <Typography color={'error'} fontSize={14}>
              Erreur lors de la l&apos;inscription
            </Typography>
          )}

          <Button type={'submit'} color={'primary'}>
            Rejoindre la Saline Royale Academy
          </Button>
        </Stack>
      </Stack>
    </FormContainer>
  );
};

export default RegisterForm;
