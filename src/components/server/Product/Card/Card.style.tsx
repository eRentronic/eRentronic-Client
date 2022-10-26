import styled from 'styled-components';

import { Text } from '@/components/common';
import { StyledTextProps, TextProps } from '@/components/common/Text/types';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 25%;
  max-height: 235px;
`;

export const Title = styled(Text)<TextProps<'span'>>`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 70%;
  font-size: 18px;
  margin: 5px 0;
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const Brand = styled(Text)<TextProps<'h4'>>`
  font-size: 13px;
  margin: 5px 0;
`;

export const Labels = styled.div`
  display: flex;
  gap: 3px;
  padding: 10px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.pallete.grey5};
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const DiscountInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const SaledPrice = styled(Text)<StyledTextProps>``;

export const CurrentPrice = styled(Text)``;

export const DiscountRate = styled(Text)``;
