import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TitleBar from '../components/common/TitleBar';
import StatusBar from '../components/common/StatusBar';
import { colors } from '../theme/theme';

function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: colors.cloudCotton,
      }}
    >
      <TitleBar />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          p: { xs: 2, sm: 4 },
        }}
      >
        <Outlet />
      </Box>

      <StatusBar />
    </Box>
  );
}

export default AuthLayout;