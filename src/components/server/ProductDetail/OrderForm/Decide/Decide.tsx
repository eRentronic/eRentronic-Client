import styled from 'styled-components';

import { Text } from '@/components/common';
import { TextProps } from '@/components/common/Text/types';

type decideType = {
  state: {
    finalPrice: string;
    isFormFilled: boolean;
  };
  func: {
    postOrder: () => void;
  };
};

type decideProps = {
  decide: decideType;
};
export function Decide({ decide }: decideProps) {
  const { state, func } = decide;
  const { finalPrice, isFormFilled } = state;
  const { postOrder } = func;

  return (
    <PriceAndButton>
      <DiscountedPrice>{`총 ${finalPrice} 원`}</DiscountedPrice>
      <PurchaseButton
        disabled={!isFormFilled}
        isFormFilled={isFormFilled}
        onClick={postOrder}
      >
        <Text>구매</Text>
      </PurchaseButton>
    </PriceAndButton>
  );
}
const PriceAndButton = styled.div`
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

const PurchaseButton = styled.button<PurchaseProps>`
  width: 70%;
  height: 100%;
  text-decoration: none;
  border: none;
  background: ${({ theme, isFormFilled }) =>
    isFormFilled ? theme.pallete.primary : theme.pallete.grey4};
  border-radius: 10px;
`;
const DiscountedPrice = styled(Text)<TextProps<'span'>>``;
