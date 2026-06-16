import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 800,
    },
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#626881',
      bgColor: 'linear-gradient(135deg, #c7d2fe 0%, #dbeafe 50%, #e2e8f0 100%)',
      gold: '#ffc400',
      iconColor: '#977027',
    },
    secondary: {
      main: '#ffffff',
      submain: '#e11414',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export default theme;
