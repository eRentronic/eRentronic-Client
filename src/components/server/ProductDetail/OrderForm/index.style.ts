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
`;

export const Title = styled(Text)`
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.pallete.grey4};
`;

export const Brand = styled(Text)`
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.pallete.grey4};
`;

export const InfoRight = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const OriginPrice = styled(Text)`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const DiscountedPrice = styled(Text)``;

export const SelectWrap = styled.section`
  width: 100%;
`;

export const OptionZone = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const DetailOptionBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;

  border: none;
  background-color: ${({ theme }) => theme.pallete.secondary};
  &:hover {
    transform: scale(0.9);
  }
  transition: 0.2s;
`;

export const OptionList = styled.ul<{ isDisplay: boolean }>`
  position: absolute;
  left: 20%;

  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  border: 1px solid black;
  width: fit-content;
  border-radius: 10px;
`;

export const Option = styled.li`
  padding: 5px 10px;
`;

export const AmountWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

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
