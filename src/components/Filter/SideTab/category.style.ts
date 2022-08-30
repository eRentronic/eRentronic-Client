import styled from 'styled-components';

import { Text, Button } from '@/components/common';

import * as TYPE from './category.type';

export const List = styled.li`
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  font-weight: 100;
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey5};
  }
`;

export const CategoryList = styled.ul<TYPE.CategoryListProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  position: relative;
  width: 100%;
  padding: 5px 0;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.pallete.grey4};
`;

export const CategoryTitle = styled(Text)`
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.pallete.grey4};
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey2};
    color: ${({ theme }) => theme.pallete.white};
  }
`;

export const ViewMoreBtn = styled(Button)<TYPE.ViewMoreBtnProps>`
  display: ${({ isDisplay }) => (!isDisplay ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 20px;
  background-color: ${({ theme }) => theme.pallete.secondary};
  border-radius: 9999px;
  right: 5px;
  bottom: 5px;
  border: none;
  overflow: hidden;
`;

export const ViewMoreText = styled(Text)`
  font-size: 1px;
  color: ${({ theme }) => theme.pallete.normalFont};
`;
