import {
  Avatar,
  Box,
  Typography,
  Divider,
  Paper,
} from '@mui/material';

import { colors } from '../theme/theme';

/**
 * Displays the current user's personal and account information.
 *
 * Shared by employees, IT technicians, and administrators.
 * Account roles are displayed as read-only information.
 *
 * Currently uses mock data for frontend development.
 * Authenticated profile retrieval and editing will be
 * implemented during backend integration.
 *
 * Related user stories:
 * - US 01.02.01: View User Profile
 * - US 01.02.02: Edit User Profile
 */
function ProfilePage() {
  return (
    <Box>
      <Typography variant="h1">
        My Profile
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5, mb: 3 }}
      >
        View your personal and account information.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          maxWidth: 640,
          border: `1px solid ${colors.cloudBorder}`,
          borderRadius: '12px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: colors.powderBlue,
              color: colors.deepBlue,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            JD
          </Avatar>

          <Box>
            <Typography variant="h2">
              Jane Doe
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              IT Technician
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'grid', gap: 2.5 }}>
          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Full name
            </Typography>

            <Typography variant="body1">
              Jane Doe
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Email address
            </Typography>

            <Typography variant="body1">
              jane.doe@example.com
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Role
            </Typography>

            <Typography variant="body1">
              IT Technician
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfilePage;