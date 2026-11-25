import { Box, Typography } from '@mui/material';
import { colors } from '../../theme/theme';

function StatusBar() {
  return (
    <Box
      component="footer"
      sx={{
        height: 32,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        bgcolor: colors.blueberryMilk,
        borderTop: `1px solid ${colors.cloudBorder}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'success.main',
          }}
        />

        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11,
            color: colors.deepBlue,
          }}
        >
          System online
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          color: colors.deepBlue,
        }}
      >
        resolve · v1.0
      </Typography>
    </Box>
  );
}

export default StatusBar;