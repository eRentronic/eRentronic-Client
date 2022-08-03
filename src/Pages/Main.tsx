import styled from 'styled-components';

import { Header } from '@/components/Header';
import { Card } from '@/components/Product/Card';

export function Main() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledMain>
        <SearchSection>여기는</SearchSection>
        <MainContents>
          <Card />
        </MainContents>
      </StyledMain>
      <aside>플러스 사이드</aside>
      <footer>푸터</footer>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0px;
  box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2);
`;

const StyledMain = styled.main`
  display: flex;

  flex-direction: column;
`;

const SearchSection = styled.section`
  height: 150px;
  background-color: aliceblue;
`;

const MainContents = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-wrap: nowrap;
`;
