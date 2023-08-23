import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import Header from '../features/header/components/Organisms/Header';
import Sidebar from '../features/sidebar/components/Organisms/Sidebar';
import { PropsWithChildren } from 'react';
import { DashboardRoutes } from '../routes';

interface DashboardLayoutProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  activeRoute: DashboardRoutes;
}

const DashboardLayout = ({
  children,
  title,
  subtitle,
  activeRoute,
}: DashboardLayoutProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      display="grid"
      gridTemplateColumns={matches ? '80px 1fr' : '250px 1fr'}
      gridTemplateRows="64px 1fr"
      sx={{ height: '100vh' }}
    >
      <Stack sx={{ gridArea: '1 / 2 / 2 / 3' }}>
        <Header title={title} subtitle={subtitle} />
      </Stack>
      <Stack sx={{ gridArea: '1 / 1 / 3 / 2' }}>
        <Sidebar activeRoute={activeRoute} />
      </Stack>
      <Stack
        sx={{
          gridArea: '2 / 2 / 3 / 3',
          padding: '16px',
          height: 'calc(100vh - 64px)',
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default DashboardLayout;
