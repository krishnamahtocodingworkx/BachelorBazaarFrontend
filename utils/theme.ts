import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // switch to 'dark' if needed
    primary: {
      main: '#395EFA',
      light: '#7391FF',
      dark: '#1E3BB8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF7043',
      light: '#FF8A65',
      dark: '#E95D2F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
    },
    error: { main: '#EF4444' },
    warning: { main: '#F59E0B' },
    success: { main: '#10B981' },
    divider: '#E5E7EB',
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Arial', sans-serif`,
  },
});
export default theme;
