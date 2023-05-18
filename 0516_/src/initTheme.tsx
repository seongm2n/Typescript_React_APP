import { createContext } from 'react';

const initTheme = { button: { border: '10px solid red', } };
export const theme = createContext(initTheme);
export const MyThemeProvider = theme.Provider;
