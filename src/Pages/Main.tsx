import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { SideTab } from '@/components/Filter/SideTab/SideTab';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Panel } from '@/components/panel';
import { Card } from '@/components/Product/Card/Card';
import { MainInput } from '@/components/Search/MainInput';
import { DarkModeStore } from '@/recoils/dark/dark';
import { popUpOpenState } from '@/recoils/popUp/popUp';

export function Main() {
  const closeWholePopUp = useResetRecoilState(popUpOpenState);
  const isDarkMode = useRecoilValue(DarkModeStore);

  return (
    <>
      <StyledHeader onClick={closeWholePopUp} isDarkMode={isDarkMode}>
        <Header />
      </StyledHeader>
      <StyledMain onClick={closeWholePopUp} isDarkMode={isDarkMode}>
        <SearchSection>여기는</SearchSection>
        <MainInput />
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
      <StyledAside onClick={closeWholePopUp}>
        <SideTab />
      </StyledAside>
      <Panel />
      <Footer />
    </>
  );
}

const StyledHeader = styled.header<{ isDarkMode: boolean }>`
  display: flex;
  padding: 20px 0px;
  box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2);
  background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.pallete.grey1 : theme.pallete.white};
`;

const StyledMain = styled.main<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.pallete.grey1 : theme.pallete.white};
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
  min-height: 70vh;
`;
