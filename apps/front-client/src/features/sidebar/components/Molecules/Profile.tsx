import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Box, Stack, SvgIcon } from '@mui/material';
import TitleText from '../Atoms/TitleText';
import DescriptionText from '../Atoms/DescriptionText';
import Link from 'next/link';
import { routes } from '../../../../routes';
import { useSession } from 'next-auth/react';
import { Person } from '@mui/icons-material';

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

  if (!user) {
    return <p>User not found or not logged in</p>;
  }

  const getFullName = () => {
    return `${user.first_name || ''} ${user.last_name || ''}`.trim();
  };

  const getEmail = () => {
    return user.email || 'Email not provided';
  };

  return (
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
          <TitleText>{getFullName()}</TitleText>
          <DescriptionText>{getEmail()}</DescriptionText>
        </ProfileDescription>
      </ProfileContainer>
    </Link>
  );
};

export default Profile;
