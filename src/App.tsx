import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from '@/components/client/ErrorBoundary';
import { AuthorizeRoute } from '@/components/client/Navigate/AuthorizeRoute';
import { Spinner } from '@/components/common';
import { MainLayout } from '@/Pages/Layout';
import { UserMyPage } from '@/Pages/UserMyPage';
import { DarkModeStore } from '@/recoils/dark/dark';
import { darkMode, lightMode } from '@/styles/globalTheme';

export function App() {
  const isDarkmode = useRecoilValue(DarkModeStore);
  const MainPage = lazy(() => import('@/Pages/Main/Main'));
  const DetailPage = lazy(() => import('@/Pages/detail'));
  const LoginPage = lazy(() => import('@/Pages/Login'));

  return (
    <ThemeProvider theme={isDarkmode ? darkMode : lightMode}>
      <ErrorBoundary fallback={<div>에러 핸들링 리셋 버튼 도입예정</div>}>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthorizeRoute />} />
              <Route element={<MainLayout />}>
                <Route path="/Main" element={<MainPage />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/MyPage" element={<UserMyPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
