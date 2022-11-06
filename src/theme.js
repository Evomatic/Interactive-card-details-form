import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
    fontSize: 12,
    weight: 500,
  },
  palette: {
    primary: {
      main: 'hsl(249, 99%, 64%)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: 'hsl(0, 100%, 66%)',
    },
  },
});

export default theme;
