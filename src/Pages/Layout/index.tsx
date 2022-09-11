import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/client/Footer';
import { Header } from '@/components/client/Header';
import { Panel } from '@/components/client/Panel';

import { StyledHeader } from './style';

export function MainLayout() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
      <Panel />
      <Footer />
    </>
  );
}
