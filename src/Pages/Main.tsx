import styled from 'styled-components';

import { Header } from '@/components/Header';

export function Main() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <aside>플러스 사이드</aside>
      <main>메인</main>
      <footer>푸터</footer>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0px;
  box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2);
`;
