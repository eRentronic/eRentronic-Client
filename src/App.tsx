import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';

import { Spinner } from '@/components/common';
import { Main } from '@/Pages/Main';
import { DarkModeStore } from '@/recoils/dark/dark';
import { darkMode, lightMode } from '@/styles/globalTheme';

import { Footer } from './components/client/Footer';
import { Header } from './components/client/Header';
import { Panel } from './components/client/Panel';
import { Detail } from './Pages/detail';

export function App() {
  const isDarkmode = useRecoilValue(DarkModeStore);
  return (
    <ThemeProvider theme={isDarkmode ? darkMode : lightMode}>
      <Suspense fallback={<Spinner />}>
        <BodyWrap>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </BrowserRouter>
          <Panel />
          <Footer />
        </BodyWrap>
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
