import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { colors } from '../../theme/theme';

interface RetroWindowProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  maxWidth?: number | string;
}

function RetroWindow({
  title,
  icon,
  children,
  maxWidth = 440,
}: RetroWindowProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth,
        bgcolor: colors.cotton,
        border: `1px solid ${colors.cloudBorder}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(52, 70, 90, 0.06)',
      }}
    >
      <Box
        sx={{
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          bgcolor: colors.blueberryMilk,
          borderBottom: `1px solid ${colors.cloudBorder}`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: colors.deepBlue,
          }}
        >
          {icon}

          <Typography
            sx={{
              fontFamily: '"Pixelify Sans", monospace',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: '24px',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          aria-hidden="true"
          sx={{
            fontSize: 16,
            color: colors.deepBlue,
          }}
        >
          ✧
        </Typography>
      </Box>

      {children}
    </Box>
  );
}

export default RetroWindow;