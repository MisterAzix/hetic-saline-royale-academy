import { Box } from '@mui/material';
import Header from '../features/header/components/Organisms/Header';
import Sidebar from '../features/sidebar/components/Organisms/Sidebar';

const DashboardLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="250px 1fr"
      sx={{ height: '100vh' }}
    >
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Header />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
