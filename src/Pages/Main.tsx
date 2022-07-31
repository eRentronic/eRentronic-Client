import styled from 'styled-components';

import { Header } from '@/components/Header';

export function Main() {
  return (
    <Layout>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <main>
        메인
        <aside>사이드</aside>
      </main>
      <footer>푸터</footer>
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 350px;
`;

const StyledHeader = styled.header`
  display: flex;
  padding: 25px 30px;
  border-bottom: 1px solid black;
`;
