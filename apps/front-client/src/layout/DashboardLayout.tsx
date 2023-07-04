import { Box, Stack } from '@mui/material';
import Header from '../features/header/components/Organisms/Header';
import Sidebar from '../features/sidebar/components/Organisms/Sidebar';

const DashboardLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="250px 1fr"
      sx={{ height: '100vh' }}
    >
      <Stack>
        <Sidebar />
      </Stack>
      <Stack>
        <Header />
      </Stack>
    </Box>
  );
};

export default DashboardLayout;
