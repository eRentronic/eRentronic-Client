import styled from 'styled-components';

const CircleBtn = styled.button`
  border: none;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const PanelWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  z-index: 40;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: ${({ theme }) => theme.pallete.grey4};
`;

export const showPanelBtn = styled.div<{ isClicked: boolean }>`
  z-index: 40;
  background: ${({ theme }) => theme.pallete.grey4};
`;
export const GoTopBtn = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey6};
  z-index: 10;
  bottom: ${({ isClicked }) => (isClicked ? '200px' : '0')};
`;
export const DarkModeBtn = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey5};
  z-index: 15;
  bottom: ${({ isClicked }) => (isClicked ? '100px' : '0')};
`;
export const gotoLogin = styled(CircleBtn)<{ isClicked: boolean }>`
  background: ${({ theme }) => theme.pallete.grey4};
  z-index: 20;
  bottom: ${({ isClicked }) => (isClicked ? '300px' : '0')};
`;
