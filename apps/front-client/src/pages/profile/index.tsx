import { ReactElement } from 'react';
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

function Profile() {
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
              name="firstName"
              helperText="Prénom"
              placeholder="John"
            />
          </Stack>
          <Stack width={'100%'}>
            <InputGroup
              label="Nom"
              name="lastName"
              helperText="Nom"
              placeholder="Doe"
            />
          </Stack>
        </Stack>
        <InputGroup
          label="Email"
          name="email"
          helperText="Email"
          placeholder="john.doe@example.com"
          icon={<MailOutlineIcon />}
        />
      </ProfileSection>
      <ProfileSection spacing={1}>
        <Stack>
          <SectionTitle>Modes de Paiement</SectionTitle>
        </Stack>
        <InputGroup
          label="Carte Bancaire"
          name="creditCard"
          helperText="Carte Bancaire"
          icon={<CreditCardIcon />}
          placeholder="0000 0000 0000 0000"
        />
        <Stack direction={'row'} spacing={2}>
          <Stack width={'100%'}>
            <InputGroup
              label="Date d'expiration"
              name="expirationDate"
              helperText="Date d'expiration"
              placeholder="MM/YY"
              icon={<CalendarMonthIcon />}
            />
          </Stack>
          <Stack width={'100%'}>
            <InputGroup
              label="CVV"
              name="cvv"
              helperText="CVV"
              placeholder="000"
              icon={<SellOutlinedIcon />}
            />
          </Stack>
        </Stack>
      </ProfileSection>
      <ProfileSection spacing={1}>
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Button size="xs" color="destructive">
            Se déconnecter
          </Button>
          <Button size="xs" color="primary">
            Enregistrer
          </Button>
        </Stack>
      </ProfileSection>
    </ProfileContainer>
  );
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon profil"
      subtitle="Modifier mon profil"
      activeRoute={routes.profile}
    >
      {page}
    </DashboardLayout>
  );
};

export default Profile;
