import styled from 'styled-components';

import { Text } from '@/components/common';

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
export const PurchaseWrap = styled.div<{ isClicked: boolean }>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80%;
  background: ${({ theme }) => theme.pallete.normalBg};
  padding: 20px;
  gap: 30px;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
export const InfoLeft = styled.div`
  display: flex;
  gap: 10px;
  height: 100px; ;
`;
export const ProductImage = styled.img`
  width: 150px;
  height: 100%;
`;
export const ProductInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding-top: 20px;
`;

export const Title = styled(Text)``;
export const Brand = styled(Text)``;

export const InfoRight = styled.div`
  float: right;
  padding-top: 20px;
`;
export const OriginPrice = styled(Text)`
  margin-bottom: 10px;
`;
export const DiscountedPrice = styled(Text)``;
export const SelectWrap = styled.section`
  width: 100%;
`;
export const DetailOptionBtn = styled.button``;
export const OptionList = styled.ul<{ isDisplay: boolean }>`
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
`;
export const Option = styled.li``;
export const AmountWrap = styled.div``;
export const AmountBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const MinusBtn = styled(AmountBtn)``;
export const PlusBtn = styled(AmountBtn)``;
export const UserInfo = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid black;
`;
export const PriceAndButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`;

type PurchaseProps = {
  isFormFilled: boolean;
};

export const PurchaseButton = styled.button<PurchaseProps>`
  width: 70%;
  height: 100%;
  text-decoration: none;
  border: none;
  background: ${({ theme, isFormFilled }) =>
    isFormFilled ? theme.pallete.primary : theme.pallete.grey4};
  border-radius: 10px;
`;
