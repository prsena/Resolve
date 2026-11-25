import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {
  MailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material';
import { colors } from '../../theme/theme';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Backend authentication will be connected later.
    setMessage('Authentication is not connected yet.');
  }

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      height: 48,
      bgcolor: colors.cotton,
    },
    '& .MuiOutlinedInput-input': {
      fontSize: 14,
      '&::placeholder': {
        color: colors.mutedBlue,
        opacity: 1,
      },
    },
  };

  const labelStyles = {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    color: colors.midnightBlue,
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: { xs: 3, sm: 4 },
      }}
    >
      {/* Form heading */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
            fontSize: 28,
            lineHeight: '36px',
            mb: 1,
          }}
        >
          Welcome back!
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            lineHeight: '20px',
            color: colors.mutedBlue,
          }}
        >
          Sign in to your Resolve workspace.
        </Typography>
      </Box>

      {/* Form fields */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Email */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            component="label"
            htmlFor="email"
            sx={labelStyles}
          >
            Work email
          </Typography>

          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlined
                      sx={{
                        fontSize: 18,
                        color: colors.mutedBlue,
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Password */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            component="label"
            htmlFor="password"
            sx={labelStyles}
          >
            Password
          </Typography>

          <TextField
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{
                        fontSize: 18,
                        color: colors.mutedBlue,
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      aria-label={
                        showPassword
                          ? 'Hide password'
                          : 'Show password'
                      }
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      edge="end"
                      sx={{ color: colors.mutedBlue }}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined
                          sx={{ fontSize: 18 }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{ fontSize: 18 }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Box>

      {message && (
        <Alert severity="info">{message}</Alert>
      )}

      {/* Sign-in button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          height: 48,
          px: '20px',
          py: '14px',
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 500,
          bgcolor: colors.deepBlue,
          '&:hover': {
            bgcolor: colors.midnightBlue,
          },
        }}
      >
        Sign in
      </Button>

      {/* Form footer */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Divider />

        <Typography
          sx={{
            textAlign: 'center',
            fontSize: 12,
            lineHeight: '18px',
            color: colors.mutedBlue,
          }}
        >
          Need an account?{' '}
          <Box
            component="span"
            sx={{
              color: colors.deepBlue,
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Contact your administrator.
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;