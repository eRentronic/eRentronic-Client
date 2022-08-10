import styled from 'styled-components';

import { Button, Icon } from '@/components/common';
import { SideTab } from '@/components/Filter/SideTab/SideTab';
import { Header } from '@/components/Header';
import { Card } from '@/components/Product/Card/Card';

export function Main() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledMain>
        <SearchSection>여기는</SearchSection>
        <StyledForm>
          <StyledInput type="search" placeholder="검색어를 입력하세요" />
          <StyledBtn>
            <Icon iconSrc="SEARCH" width={25} height={25} />
          </StyledBtn>
        </StyledForm>
        <MainContents>
          <Card
            title="키보드"
            thumbnail="https://cdn.inflearn.com/public/courses/328753/cover/0c368e07-0353-4167-a4cb-56726d49218e/%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5.png"
            brand="레오폴드"
            currentPrice={3000}
            salePrice={2000}
            discountRate={10}
            isLike={false}
            content="제품 설명 테스트 중~"
          />
        </MainContents>
      </StyledMain>
      <StyledAside>
        <SideTab />
      </StyledAside>
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

const StyledAside = styled.aside`
  position: fixed;
  width: 15%;
  left: 5%;
  top: 30%;
`;

const SearchSection = styled.section`
  height: 150px;
  background-color: aliceblue;
`;

const MainContents = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const StyledForm = styled.form`
  display: flex;
  position: relative;
  width: 50%;
  margin: 20px auto;
`;

const StyledInput = styled.input`
  border-radius: 9999px;
  border: none;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 900;
  box-shadow: 0px 8px 22px 1px rgba(0, 0, 0, 0.2);
  :focus {
    outline: 2px solid ${({ theme }) => theme.pallete.primary};
  }
  cursor: pointer;
`;

const StyledBtn = styled(Button)`
  position: absolute;
  border: none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  right: 5%;
  top: 5%;
  cursor: pointer;
`;
