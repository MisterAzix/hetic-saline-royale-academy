import { Stack } from '@mui/material';
import { Button, InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import styled from '@emotion/styled';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useUpdateUser, useUpdateUserFormValidation } from '../../hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUpdateUserForm } from '../../types';
import FirstnameField from '../Molecules/FirstnameField';
import LastnameField from '../Molecules/LastnameField';
import EmailField from '../Molecules/EmailField';
import AlertMessage from '../Atoms/AlertMessage';
import SectionTitle from '../Atoms/SectionTitle';

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
`;

const ProfileSection = styled(Stack)`
  width: 500px;
`;

const UpdateUserForm = () => {
  const session = useSession();
  const user = session?.data?.user;

  const initialValues: IUpdateUserForm = {
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
  };

  const updateUserFormValidation = useUpdateUserFormValidation();
  const { submitUpdateUserForm, isLoading, isError } = useUpdateUser();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(updateUserFormValidation),
    mode: 'onBlur',
  });

  if (!user) {
    return null;
  }

  return (
    <ProfileForm>
      <ProfileSection spacing={1}>
        <Stack>
          <SectionTitle>Informations de base</SectionTitle>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Stack width={'100%'}>
            <FirstnameField control={control} />
          </Stack>
          <Stack width={'100%'}>
            <LastnameField control={control} />
          </Stack>
        </Stack>
        <EmailField control={control} />
      </ProfileSection>
      <ProfileSection spacing={1}>
        <Stack>
          <SectionTitle>Modes de paiement</SectionTitle>
          <AlertMessage>
            Ces données sont uniquement accessibles et visibles par vous.
          </AlertMessage>
        </Stack>
        <InputGroup
          label="Carte Bancaire"
          name="creditCard"
          helperText="Carte Bancaire"
          icon={<CreditCardIcon />}
          placeholder="0000 0000 0000 0000"
          defaultValue="6732 2213 2135 8765"
        />
        <Stack direction={'row'} spacing={2}>
          <Stack width={'100%'}>
            <InputGroup
              label="Date d'expiration"
              name="expirationDate"
              helperText="Date d'expiration"
              placeholder="MM/YY"
              icon={<CalendarMonthIcon />}
              defaultValue="09/25"
            />
          </Stack>
          <Stack width={'100%'}>
            <InputGroup
              label="CVV"
              name="cvv"
              helperText="CVV"
              placeholder="000"
              icon={<SellOutlinedIcon />}
              defaultValue="765"
            />
          </Stack>
        </Stack>
      </ProfileSection>
      <ProfileSection spacing={1}>
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Button size="xs" color="destructive">
            Se déconnecter
          </Button>
          <Button
            onClick={handleSubmit((data: IUpdateUserForm) =>
              submitUpdateUserForm({
                id: user?.sub,
                data,
              })
            )}
            size="xs"
            color="primary"
            disabled={isLoading}
          >
            <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
              {isLoading && <CircularProgress size={20} color="inherit" />}
              Enregistrer
            </Stack>
          </Button>
        </Stack>
        {isError && (
          <AlertMessage>
            Une erreur est survenue lors de la mise à jour de vos informations.
            Veuillez réessayer.
          </AlertMessage>
        )}
      </ProfileSection>
    </ProfileForm>
  );
};

export default UpdateUserForm;
