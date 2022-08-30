import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pallete.normalBg};
  height: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0px;
  box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StyledAside = styled.aside`
  position: fixed;
  width: 15%;
  left: 5%;
  top: 30%;
`;

export const SearchSection = styled.section`
  height: 150px;
  background-color: aliceblue;
`;

export const MainContents = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-wrap: wrap;
  min-height: 70vh;
`;
