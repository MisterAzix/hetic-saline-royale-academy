import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Box, Stack } from '@mui/material';
import TitleText from '../Atoms/TitleText';
import DescriptionText from '../Atoms/DescriptionText';

const ProfileContainer = styled(Stack)`
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[800]};
  }
`;

const Profile = () => {
  return (
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
  );
};

export default Profile;
