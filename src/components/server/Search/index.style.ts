import styled from 'styled-components';

import { Button } from '@/components/common';

export const StyledForm = styled.form`
  display: flex;
  position: relative;
  width: 50%;
  margin: 20px auto;
`;

export const StyledInput = styled.input`
  border-radius: 9999px;
  border: none;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 300;
  box-shadow: 0px 8px 22px 1px rgba(0, 0, 0, 0.2);
  :focus {
    outline: 2px solid ${({ theme }) => theme.pallete.primary};
  }
  cursor: pointer;
`;

export const StyledBtn = styled(Button)`
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
