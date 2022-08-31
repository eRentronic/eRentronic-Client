import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Spinner } from '@/components/common';
import { Main } from '@/Pages/Main';
import { DarkModeStore } from '@/recoils/dark/dark';
import { darkMode, lightMode } from '@/styles/globalTheme';

export function App() {
  const isDarkmode = useRecoilValue(DarkModeStore);
  return (
    <ThemeProvider theme={isDarkmode ? darkMode : lightMode}>
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
    </ThemeProvider>
  );
}
