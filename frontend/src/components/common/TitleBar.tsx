import { Box, Typography } from '@mui/material';
import { MonitorOutlined } from '@mui/icons-material';
import { colors } from '../../theme/theme';

function TitleBar() {
  return (
    <Box
      component="header"
      sx={{
        height: 48,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        bgcolor: colors.powderBlue,
        borderBottom: `1px solid ${colors.cloudBorder}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <MonitorOutlined
          sx={{
            fontSize: 20,
            color: colors.deepBlue,
          }}
        />

        <Typography
          sx={{
            fontFamily: '"Pixelify Sans", monospace',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '24px',
            color: colors.deepBlue,
          }}
        >
          resolve.exe
        </Typography>
      </Box>

      <Typography
        aria-hidden="true"
        sx={{
          fontSize: 16,
          color: colors.deepBlue,
        }}
      >
        ✧ ♡ ✧
      </Typography>
    </Box>
  );
}

export default TitleBar;