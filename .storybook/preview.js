import { ThemeProvider } from 'styled-components';
import { globalTheme } from '@/styles/globalTheme';
import { lightMode } from '@/styles/globalTheme';
import { BrowserRouter } from 'react-router-dom';

const { pallete } = globalTheme;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => {
    return (
      <ThemeProvider theme={lightMode}>
        <BrowserRouter>
          <Story></Story>
        </BrowserRouter>
      </ThemeProvider>
    );
  },
];

export const argTypes = {
  color: {
    description: '버튼 배경 색상',
    control: 'select',
    options: Object.keys(pallete),
  },
};
