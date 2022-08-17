import { DefaultTheme } from 'styled-components';

const globalTheme: DefaultTheme = {
  pallete: {
    primary: '#1DC078',
    secondary: '#3298dc',
    warning: '#ff5b16',
    grey1: '#333333',
    grey2: '#4F4F4F',
    grey3: '#828282',
    grey4: '#BDBDBD',
    grey5: '#E0E0E0',
    grey6: '#F5F5F7',
    footerGrey: '#444',
    black: '#010101',
    white: '#FFFFFF',
  },
  typography: {
    Black: { weight: 900, size: '24px' },
    Bold: { weight: 700, size: '20px' },
    Regular: { weight: 500, size: '16px' },
    Light: { weight: 300, size: '13px' },
    Thin: { weight: 100, size: '10px' },
  },
};

export { globalTheme };
