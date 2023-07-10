import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import Profile from '../Molecules/Profile';
import Progress from '../Molecules/Progress';
import Image from 'next/image';
import Navigation from '../Molecules/Navigation';
import { DashboardRoutes } from '../../../../routes';
import Link from 'next/link';

interface SidebarProps {
  activeRoute: DashboardRoutes;
}

const SidebarContainer = styled(Stack)`
  background-color: ${palette.gray[900]};
  min-height: 100vh;
  padding: 10px;
  justify-content: space-between;
  transition: width 0.2s ease-in-out;
  width: 100%;

  @media (max-width: 899px) {
    width: 80px;
  }
`;

const Logo = styled(Link)`
  padding: 0 10px;

  @media (max-width: 899px) {
    padding: 0;
    margin: 0 auto;
  }
`;

const Sidebar = ({ activeRoute }: SidebarProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SidebarContainer>
      <Stack spacing={3}>
        <Logo href="/">
          <Image
            src={
              matches
                ? '/assets/svg/sra_logo_minimized.svg'
                : '/assets/svg/sra_logo.svg'
            }
            width={matches ? 40 : 153}
            height={53}
            alt="Saline Royale Academy Logo"
          />
        </Logo>
        <Navigation activeRoute={activeRoute} />
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
