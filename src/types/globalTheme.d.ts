import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: {
      primary: string;
      secondary: string;
      warning: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      grey6: string;
      black: string;
      white: string;
    };

    typography: {
      Black: font;
      Bold: font;
      Regular: font;
      Light: font;
      Thin: font;
    };
  }
}

type font = {
  size: string;
  weight: number;
};
