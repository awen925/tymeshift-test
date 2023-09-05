import { createTheme } from '@mui/material';

export const muiTheme = () => {
  return createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      primary: {
        main: '#37B24D',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#0011224d',
      },
      text: {
        primary: '#001122cc',
        secondary: '#0011224d',
        disabled: '#0011221a',
      },
      divider: '#eeeeee',
    },
    typography: {
      h1: {
        fontSize: '22px',
        lineHeight: 28 / 22,
      },
      h3: {
        fontSize: '18px',
        lineHeight: 32 / 18,
      },
      body1: {
        fontSize: '16px',
        lineHeight: 28 / 16,
      },
      body2: {
        fontSize: '14px',
        lineHeight: 24 / 14,
      },
      button: {
        fontSize: '14px',
        lineHeight: 24 / 14,
      },
      fontFamily: 'Lato',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: '1px solid #0011221a',
            backgroundColor: '#ffffff',
            '&:hover': {
              backgroundColor: '#f6f6f6',
              cursor: 'pointer',
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '15px 25px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '4px 15px',
          },
        },
      },
    },
  });
};
