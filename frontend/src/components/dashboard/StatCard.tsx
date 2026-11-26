
import type { ReactNode } from 'react';
import { Box, Card, Typography } from '@mui/material';

interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: ReactNode;
  backgroundColor: string;
}

function StatCard({
  title,
  value,
  description,
  icon,
  backgroundColor,
}: StatCardProps) {
  return (
    <Card
      sx={{
        bgcolor: backgroundColor,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            color: 'primary.main',
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography
        component="p"
        variant="h1"
        sx={{ fontSize: '2rem' }}
      >
        {value}
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
      >
        {description}
      </Typography>
    </Card>
  );
}

export default StatCard;