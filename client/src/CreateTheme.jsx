import { createTheme } from '@mui/material/styles';

// Светлая тема
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1DA1F2',
    },
    secondary: {
      main: '#FFAD1F',
    },
    // Дополнительные настройки цветов...
  },
  // Дополнительные настройки стилей...
});

// Темная тема
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DA1F2',
    },
    secondary: {
      main: '#FFAD1F',
    },
    // Дополнительные настройки цветов...
  },
  // Дополнительные настройки стилей...
});

export { lightTheme, darkTheme };
