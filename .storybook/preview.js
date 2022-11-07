import { ThemeProvider } from 'styled-components';

import { lightMode } from '@/styles/globalTheme';
import { BrowserRouter } from 'react-router-dom';

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
