
import { Box, Typography } from '@mui/material';
import {
  ConfirmationNumberOutlined,
  AccessTimeOutlined,
  CheckCircleOutlined,
} from '@mui/icons-material';

import WelcomeCard from '../components/dashboard/WelcomeCard';
import StatCard from '../components/dashboard/StatCard';
import { mockTickets } from '../data/MockTickets';
import { colors } from '../theme/theme';

function OverviewPage() {
  const openTickets = mockTickets.filter(
    (ticket) => ticket.status === 'Open',
  ).length;

  const inProgressTickets = mockTickets.filter(
    (ticket) => ticket.status === 'In Progress',
  ).length;

  const resolvedTickets = mockTickets.filter(
    (ticket) => ticket.status === 'Resolved',
  ).length;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box>
        <Typography variant="h1" component="h1">
          Overview
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          Here's what's happening in your workspace.
        </Typography>
      </Box>

      <WelcomeCard />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: 3,
        }}
      >
        <StatCard
          title="Open tickets"
          value={openTickets}
          description="Awaiting assignment"
          icon={<ConfirmationNumberOutlined />}
          backgroundColor={colors.blueberryMilk}
        />

        <StatCard
          title="In progress"
          value={inProgressTickets}
          description="Currently being handled"
          icon={<AccessTimeOutlined />}
          backgroundColor={colors.vanillaPudding}
        />

        <StatCard
          title="Resolved"
          value={resolvedTickets}
          description="Successfully resolved"
          icon={<CheckCircleOutlined />}
          backgroundColor={colors.mintMochi}
        />
      </Box>
    </Box>
  );
}

export default OverviewPage;
