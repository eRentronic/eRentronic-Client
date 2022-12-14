import styled from 'styled-components';

import { Text } from '@/components/common';
import { TextProps } from '@/components/common/Text/types';

type WrapperProps = {
  isDisplay: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 5px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

export const ContentMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Info = styled(Text)<TextProps<'span'>>`
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const UserSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
`;
