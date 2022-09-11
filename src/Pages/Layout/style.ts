import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  /* box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2); */
  background: ${({ theme }) => theme.pallete.normalBg};
`;

export const Layout = styled.div`
  background: ${({ theme }) => theme.pallete.normalBg};
  margin: 0 auto;
`;
