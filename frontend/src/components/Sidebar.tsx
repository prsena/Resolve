import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

import {
  DashboardOutlined,
  ConfirmationNumberOutlined,
  AssignmentOutlined,
  PeopleOutlined,
  BarChartOutlined,
  SettingsOutlined,
} from '@mui/icons-material';

import { NavLink, useLocation } from 'react-router-dom';

import pip from '../assets/brand/pip.svg';
import { colors } from '../theme/theme';

const navigationItems = [
  {
    label: 'Overview',
    path: '/',
    icon: DashboardOutlined,
  },
  {
    label: 'Tickets',
    path: '/tickets',
    icon: ConfirmationNumberOutlined,
  },
  {
    label: 'My Tasks',
    path: '/tasks',
    icon: AssignmentOutlined,
  },
  {
    label: 'Team',
    path: '/team',
    icon: PeopleOutlined,
  },
  {
    label: 'Reports',
    path: '/reports',
    icon: BarChartOutlined,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: SettingsOutlined,
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <Box
      component="aside"
      sx={{
        width: 240,
        flexShrink: 0,
        minHeight: '100vh',
        bgcolor: colors.blueberryMilk,
        borderRight: `1px solid ${colors.cloudBorder}`,
        display: 'flex',
        flexDirection: 'column',
        p: 2.5,
      }}
    >
      {/* Brand identity */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
          pb: 4,
        }}
      >
        <Box
          component="img"
          src={pip}
          alt="Pip, the Resolve mascot"
          sx={{ width: 100 }}
        />

        <Typography
          sx={{
            fontFamily: '"Pixelify Sans", monospace',
            fontSize: 32,
            fontWeight: 700,
            color: colors.deepBlue,
          }}
        >
          resolve.
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          Your cozy IT workspace.
        </Typography>
      </Box>

      {/* Navigation */}
      <Box component="nav" aria-label="Main navigation">
        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            fontWeight: 600,
            letterSpacing: 1,
            color: colors.mutedBlue,
          }}
        >
          WORKSPACE
        </Typography>

        <List disablePadding sx={{ mt: 1 }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname === item.path ||
                  location.pathname.startsWith(
                    `${item.path}/`,
                  );

            return (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                selected={isActive}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  px: 1.5,
                  py: 1.25,
                  color: colors.midnightBlue,

                  '&.Mui-selected': {
                    bgcolor: colors.powderBlue,
                  },

                  '&.Mui-selected:hover': {
                    bgcolor: colors.powderBlue,
                  },

                  '&:hover': {
                    bgcolor: colors.cloudCotton,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: colors.deepBlue,
                  }}
                >
                  <Icon fontSize="small" />
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                      fontWeight: isActive ? 600 : 400,
                      },
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 'auto', pt: 3 }}>
        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1,
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

          <Typography variant="caption">
            System online
          </Typography>
        </Box>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: colors.mutedBlue,
            mt: 2,
            fontStyle: 'italic',
          }}
        >
          Small fixes. Better days. ♡
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;