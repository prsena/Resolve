import { useState } from 'react';

import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import {
  PersonOutlined,
  SettingsOutlined,
  LogoutOutlined,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@mui/icons-material';

import { colors } from '../../theme/theme';

/**
 * Configuration and action handlers for the account menu
 */
interface ProfileMenuProps {
  name: string;
  role: string;
  onProfile: () => void;
  onSettings: () => void;
  onSignOut: () => void;
}

/**
 * Displays the current user's identity and account navigation
 * within the dashboard sidebar.
 *
 * Shared across employee, technician, and administrator layouts.
 * Account actions are delegated to the parent component to keep
 * this component independent of routing and authentication logic.
 *
 * The menu opens above the profile card because it is positioned
 * near the bottom of the sidebar.
 */
function ProfileMenu({
  name,
  role,
  onProfile,
  onSettings,
  onSignOut,
}: ProfileMenuProps) {
  // The anchor element controls both menu visibility and positioning
  const [anchorEl, setAnchorEl] =
    useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  // Generate up to two initials as a fallback for the user's avatar
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Close the menu before executing the selected account
  const handleAction = (action: () => void) => {
    handleClose();
    action();
  };

  return (
    <>
      <ButtonBase
        id="profile-menu-button"
        aria-label="Open account menu"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? 'profile-menu' : undefined}
        onClick={(event) =>
          setAnchorEl(event.currentTarget)
        }
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          gap: 1.5,
          p: 1.5,
          borderRadius: '8px',
          bgcolor: colors.powderBlue,
          textAlign: 'left',

          '&:hover': {
            bgcolor: colors.cloudCotton,
          },

          '&.Mui-focusVisible': {
            outline: `2px solid ${colors.deepBlue}`,
            outlineOffset: 2,
          },
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: colors.cloudCotton,
            color: colors.deepBlue,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {initials}
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            noWrap
            sx={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.midnightBlue,
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="caption"
            noWrap
            sx={{
              display: 'block',
              color: colors.mutedBlue,
            }}
          >
            {role}
          </Typography>
        </Box>

        {open ? (
          <KeyboardArrowDown
            fontSize="small"
            sx={{ color: colors.deepBlue }}
          />
        ) : (
          <KeyboardArrowUp
            fontSize="small"
            sx={{ color: colors.deepBlue }}
          />
        )}
      </ButtonBase>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          list: {
            'aria-labelledby': 'profile-menu-button',
          },
          paper: {
            sx: {
              width: anchorEl?.offsetWidth,
              mb: 1,
              borderRadius: '8px',
              border: `1px solid ${colors.cloudBorder}`,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
            },
          },
        }}
      >
        <MenuItem
          onClick={() => handleAction(onProfile)}
        >
          <ListItemIcon>
            <PersonOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText
            primary="My Profile"
            slotProps={{
              primary: { sx: { fontSize: 13 } },
            }}
          />
        </MenuItem>

        <MenuItem
          onClick={() => handleAction(onSettings)}
        >
          <ListItemIcon>
            <SettingsOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText
            primary="Account Settings"
            slotProps={{
              primary: { sx: { fontSize: 13 } },
            }}
          />
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => handleAction(onSignOut)}
          sx={{ color: 'error.main' }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <LogoutOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText
            primary="Sign Out"
            slotProps={{
              primary: { sx: { fontSize: 13 } },
            }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;