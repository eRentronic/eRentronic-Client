import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { Spinner } from '@/components/common';
import { Detail } from '@/Pages/Detail';
import { MainLayout } from '@/Pages/Layout';
import { LoginPage } from '@/Pages/Login';
import { Main } from '@/Pages/Main';
import { DarkModeStore } from '@/recoils/dark/dark';
import { darkMode, lightMode } from '@/styles/globalTheme';

export function App() {
  const isDarkmode = useRecoilValue(DarkModeStore);

  return (
    <ThemeProvider theme={isDarkmode ? darkMode : lightMode}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<MainLayout />}>
              <Route path="/Main" element={<Main />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}
