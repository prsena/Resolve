import { Box, Typography } from '@mui/material';
import { DescriptionOutlined } from '@mui/icons-material';
import RetroWindow from '../common/RetroWindow';

function WelcomeCard() {
    return (
      <RetroWindow
        title="welcome.txt"
        icon={ <DescriptionOutlined sx={{ fontSize: 18 }} /> }
        maxWidth="100%"
      >
        <Box sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography
            component="h2"
            variant="h1"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mb: 1.5,
            }}
          >
            Hello, problem solver!
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Let's make today a productive one.
          </Typography>
        </Box>
      </RetroWindow>
    );
}

export default WelcomeCard;