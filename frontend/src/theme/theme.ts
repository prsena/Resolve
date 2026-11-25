import { createTheme } from '@mui/material/styles';

// Resolve - Soft Pixel Club: Blueberry Edition
export const colors = {
  // Brand colours
  cloudCotton: '#F7F9FC',
  blueberryMilk: '#E1EBF7',
  strawberryCream: '#F3DFE5',
  powderBlue: '#CEDFF1',
  mintMochi: '#E1EBDD',
  vanillaPudding: '#F6EDCF',
  dustyBlue: '#7894B5',
  midnightBlue: '#34465A',
  cotton: '#FFFFFF',

  // Supporting colours
  deepBlue: '#496681',
  mutedBlue: '#60758A',
  cloudBorder: '#D5DFEB',
  rosyBlush: '#E8B8C8',
  criticalRose: '#A83F52',
} as const;

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: colors.deepBlue,
      light: colors.powderBlue,
      dark: colors.midnightBlue,
      contrastText: colors.cotton,
    },

    secondary: {
      main: colors.strawberryCream,
      contrastText: colors.midnightBlue,
    },

    background: {
      default: colors.cloudCotton,
      paper: colors.cotton,
    },

    text: {
      primary: colors.midnightBlue,
      secondary: colors.mutedBlue,
    },

    success: {
      main: '#426548',
      light: colors.mintMochi,
    },

    warning: {
      main: '#85651D',
      light: colors.vanillaPudding,
    },

    error: {
      main: colors.criticalRose,
    },

    info: {
      main: colors.deepBlue,
      light: colors.blueberryMilk,
    },

    divider: colors.cloudBorder,
  },

  typography: {
    fontFamily: '"DM Sans", sans-serif',

    h1: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: '2rem',
      fontWeight: 700,
    },

    h2: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 700,
    },

    h3: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 600,
    },

    body1: {
      fontSize: '1rem',
    },

    body2: {
      fontSize: '0.875rem',
    },

    caption: {
      fontSize: '0.75rem',
    },

    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${colors.cloudBorder}`,
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        notchedOutline: {
          borderColor: colors.cloudBorder,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;