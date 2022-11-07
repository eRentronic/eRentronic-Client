import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

type ModalType = {
  width: string;
  height: string;
};

type ModalProps = {
  modal: ModalType;
};

export function Modal({ modal }: ModalProps) {
  const { width, height } = modal;
  const [isClicked, setIsClicked] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false); // 모달

  const closeModal = () => {
    setIsClicked(!isClicked);
    setIsDisplay(false);
  };

  const onClickDimmed = (e: MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Dimmed isClicked={isClicked} onClick={onClickDimmed}>
      <ModalWrap isClicked={isClicked} width={width} height={height}>
        모달
      </ModalWrap>
    </Dimmed>
  );
}

export const Dimmed = styled.div<{ isClicked: boolean }>`
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
  width: string;
  height: string;
}>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => (width ? `${width}` : '50%')};
  height: ${({ height }) => height};
  border-radius: 15px;
  background: ${({ theme }) => theme.pallete.normalBg};
  padding: 10px;
  gap: 15px;
`;
