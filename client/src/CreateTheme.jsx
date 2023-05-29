import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Основной цвет
    },
    secondary: {
      main: '#00FF00', // Вторичный цвет
    },
    error: {
      main: '#FF0000', // Цвет ошибки
    },
    warning: {
      main: '#FFC107', // Цвет предупреждения
    },
    info: {
      main: '#2196F3', // Цвет информации
    },
    success: {
      main: '#4CAF50', // Цвет успешного выполнения
    },
  },
});





// // Светлая тема
// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#1DA1F2',
//     },
//     secondary: {
//       main: '#FFAD1F',
//     },
//     // Дополнительные настройки цветов...
//   },
//   // Дополнительные настройки стилей...
// });

// // Темная тема
// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1DA1F2',
//     },
//     secondary: {
//       main: '#FFAD1F',
//     },
//     // Дополнительные настройки цветов...
//   },
//   // Дополнительные настройки стилей...
// });

export default { theme };
