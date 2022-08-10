import styled from 'styled-components';

import { Text } from '@/components/common';

import * as TYPE from './category.type';

export const List = styled.li`
  padding: 8px;
  box-sizing: border-box;
  font-weight: 100;
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey5};
  }
`;

export const CategoryList = styled.ul<TYPE.CategoryListProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  width: 100%;
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
