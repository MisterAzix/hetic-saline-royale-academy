import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Divider, Stack } from '@mui/material';
import Profile from '../Molecules/Profile';
import Progress from '../Molecules/Progress';
import Image from 'next/image';
import Navigation from '../Molecules/Navigation';

const SidebarContainer = styled(Stack)`
  background-color: ${palette.gray[900]};
  min-height: 100vh;
  padding: 10px;
  justify-content: space-between;
`;

const Logo = styled(Image)`
  padding: 0 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Stack spacing={3}>
        <Logo
          src="/assets/svg/sra_logo.svg"
          width={173}
          height={53}
          alt="Saline Royale Academy Logo"
        />
        <Navigation />
      </Stack>
      <Stack spacing={2}>
        <Progress />
        <Divider
          variant="middle"
          sx={{ backgroundColor: palette.gray[700], borderRadius: '4px' }}
        />
        <Profile />
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar;
