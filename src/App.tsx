import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';

import { Spinner } from '@/components/common';
import { Detail } from '@/Pages/Detail';
import { MainLayout } from '@/Pages/Layout';
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
            <Route element={<MainLayout />}>
              <Route path="/" element={<Main />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  /* box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2); */
  background: ${({ theme }) => theme.pallete.normalBg};
`;
export const BodyWrap = styled.div`
  background: ${({ theme }) => theme.pallete.normalBg};
  margin: 0 auto;
`;
