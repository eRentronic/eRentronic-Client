import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pallete.normalBg};
  height: 100%;
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
  min-height: 100vh;
`;
