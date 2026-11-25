import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function DashboardLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          p: 4,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;