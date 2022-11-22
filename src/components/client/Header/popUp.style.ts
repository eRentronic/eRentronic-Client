import styled from 'styled-components';

import * as Types from './popUp.types';

export const Select = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Menu = styled.ul<Types.MenuProps>`
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100px;
  top: 0;
  left: 0;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  transform: translate(0, 30px); // Todo: 고정된 메뉴창 위치 선정을 위해서

  li {
    padding: 10px;
  }

  li:hover {
    box-sizing: border-box;
    background-color: grey;
  }
`;
