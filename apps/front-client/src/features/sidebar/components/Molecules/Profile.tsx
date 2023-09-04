import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Person } from '@mui/icons-material';
import { Box, Stack, SvgIcon } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { routes } from '../../../../routes';
import DescriptionText from '../Atoms/DescriptionText';
import TitleText from '../Atoms/TitleText';

const ProfileContainer = styled(Stack)`
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[700]};
  }
`;

const ProfileDescription = styled(Box)`
  @media (max-width: 899px) {
    display: none;
  }
`;

const Profile = () => {
  const session = useSession();
  const user = session?.data?.user;

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (!user) {
    return null;
  }

  const fullName = `${user.first_name || ''} ${user.last_name || ''}`;
  const email = user.email || '';

  return (
    <>
      <Link href={routes.profile}>
        <ProfileContainer>
          <Box
            sx={{
              borderRadius: '50%',
              backgroundColor: palette.gray[100],
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SvgIcon sx={{ color: palette.gray[900] }}>
              <Person />
            </SvgIcon>
          </Box>
          <ProfileDescription>
            <TitleText>{fullName}</TitleText>
            <DescriptionText>{email}</DescriptionText>
          </ProfileDescription>
        </ProfileContainer>
      </Link>
      <TitleText>
        <button onClick={handleLogout}>Logout</button>
      </TitleText>
    </>
  );
};

export default Profile;
