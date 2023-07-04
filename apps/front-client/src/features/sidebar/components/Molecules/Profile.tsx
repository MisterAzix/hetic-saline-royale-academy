import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Box, Stack } from '@mui/material';
import TitleText from '../Atoms/TitleText';
import DescriptionText from '../Atoms/DescriptionText';
import Link from 'next/link';
import { routes } from '../../../../routes';

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

const Profile = () => {
  return (
    <Link href={routes.profile}>
      <ProfileContainer>
        <Box
          sx={{
            borderRadius: '50%',
            backgroundColor: palette.gray[100],
            width: '40px',
            height: '40px',
          }}
        />
        <Stack>
          <TitleText>John Doe</TitleText>
          <DescriptionText>john.doe@example.fr</DescriptionText>
        </Stack>
      </ProfileContainer>
    </Link>
  );
};

export default Profile;
