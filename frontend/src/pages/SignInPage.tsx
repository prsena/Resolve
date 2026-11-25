import { Box, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import RetroWindow from '../components/common/RetroWindow';
import LoginForm from '../components/auth/LoginForm';
import pip from '../assets/brand/pip.svg';
import { colors } from '../theme/theme';

function SignInPage() {
  return (
    <>
      {/* Brand identity */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          component="img"
          src={pip}
          alt="Pip, the Resolve mascot"
          sx={{
            width: 112,
            height: 'auto',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Pixelify Sans", monospace',
              fontWeight: 700,
              fontSize: 40,
              lineHeight: '48px',
              color: colors.deepBlue,
            }}
          >
            resolve.
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              lineHeight: '20px',
              color: colors.mutedBlue,
            }}
          >
            Your cozy IT workspace.
          </Typography>
        </Box>
      </Box>

      {/* Login window */}
      <RetroWindow
        title="login.exe"
        icon={<LockOutlined sx={{ fontSize: 16 }} />}
        maxWidth={440}
      >
        <LoginForm />
      </RetroWindow>

      {/* Brand tagline */}
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: '18px',
          fontStyle: 'italic',
          color: colors.mutedBlue,
          textAlign: 'center',
        }}
      >
        ♡ Small fixes. Better days. ♡
      </Typography>
    </>
  );
}

export default SignInPage;