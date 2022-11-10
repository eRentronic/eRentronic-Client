import { Dispatch, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

type ModalType = {
  radius?: boolean | string;
  width?: string;
  children: ReactNode;
  isClicked: boolean;
  setIsClicked: Dispatch<boolean>;
};

export function Modal({
  radius = false,
  width,
  children,
  isClicked,
  setIsClicked,
}: ModalType) {
  const closeModal = () => {
    setIsClicked(!isClicked);
  };

  const onClickDimmed = () => {
    closeModal();
  };

  const onClickModalWrap = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dimmed isClicked={isClicked} onClick={onClickDimmed}>
      <ModalWrap
        onClick={onClickModalWrap}
        isClicked={isClicked}
        radius={radius}
        width={width}
      >
        {children}
      </ModalWrap>
    </Dimmed>
  );
}

export const Dimmed = styled.section<{ isClicked: boolean }>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalWrap = styled.div<{
  isClicked: boolean;
  radius: boolean | string;
  width: string;
}>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  /* width: ${({ width }) => `${width}`}; */
  width: ${({ width }) => width};
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ radius }) => (!radius ? 0 : `${radius}`)};
  background: ${({ theme }) => theme.pallete.normalBg};
  padding: 10px;
  gap: 15px;
`;
