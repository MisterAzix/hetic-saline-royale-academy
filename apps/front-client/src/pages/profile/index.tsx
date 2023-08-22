import { ReactElement, useEffect, useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { Stack, Typography } from '@mui/material';
import {
  Button,
  InputGroup,
  palette,
  typography,
} from '@hetic-saline-royale-academy/kit-ui';
import styled from '@emotion/styled';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { useSession } from 'next-auth/react';
import { useUpdateUser } from '../../features/sidebar/hooks/useUpdateUser';

const ProfileContainer = styled(Stack)`
  padding: 40px 0;
  align-items: center;
`;

const ProfileSection = styled(Stack)`
  width: 500px;
`;

const SectionTitle = styled(Typography)`
  color: ${palette.gray[700]};
  ${typography.sm.semiBold};
`;

const AlertMessage = styled(Typography)`
  color: ${palette.error[500]};
  ${typography.xs.medium};
`;

function Profile() {
  const initialUserData = {
    first_name: '',
    last_name: '',
    email: '',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [message, setMessage] = useState('');

  const updateUserMutation = useUpdateUser();

  const session = useSession();
  const user = session?.data?.user;

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleSave = () => {
    if (!user?.sub) {
      setMessage("L'ID utilisateur est manquant.");
      return;
    }

    const payload = {
      id: user.sub,
      data: userData,
    };

    updateUserMutation.mutate(payload);
  };

  if (!user) {
    return <p>User not found or not logged in</p>;
  }

  return (
    <ProfileContainer spacing={5}>
      <ProfileSection spacing={1}>
        <Stack>
          <SectionTitle>Informations de base</SectionTitle>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Stack width={'100%'}>
            <InputGroup
              label="Prénom"
              name="first_name"
              helperText="Prénom"
              placeholder="John"
              defaultValue={user.first_name}
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  first_name: e.target.value,
                }))
              }
            />
          </Stack>
          <Stack width={'100%'}>
            <InputGroup
              label="Nom"
              name="last_name"
              helperText="Nom"
              placeholder="Doe"
              defaultValue={user.last_name}
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  last_name: e.target.value,
                }))
              }
            />
          </Stack>
        </Stack>
        <InputGroup
          label="Email"
          name="email"
          helperText="Email"
          placeholder="john.doe@example.com"
          icon={<MailOutlineIcon />}
          defaultValue={user.email}
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </ProfileSection>
      <ProfileSection spacing={1}>
        <Stack>
          <SectionTitle>Modes de Paiement</SectionTitle>
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
          <Button onClick={handleSave} size="xs" color="primary">
            Enregistrer
          </Button>
        </Stack>
        {message && <p>{message}</p>}
      </ProfileSection>
    </ProfileContainer>
  );
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon profil"
      subtitle="Modifier mes infos personnelles et mes modes de paiement"
      activeRoute={routes.profile}
    >
      {page}
    </DashboardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: routes.login } };
  }

  return { props: { session } };
}

export default Profile;
