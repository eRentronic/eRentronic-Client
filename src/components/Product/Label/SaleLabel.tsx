import styled from 'styled-components';

import { Text } from '@/components/common';

type SaleLabelProps = {
  isEventSale: boolean;
  isBrandNewSale: boolean;
};

export function SaleLabel({ isEventSale, isBrandNewSale }: SaleLabelProps) {
  return (
    <StyledLabel isEventSale={isEventSale} isBrandNewSale={isBrandNewSale}>
      <Text typography="Light">
        {isEventSale
          ? '이벤트 할인'
          : isBrandNewSale
          ? '신상품 할인'
          : undefined}
      </Text>
    </StyledLabel>
  );
}

const StyledLabel = styled.div<SaleLabelProps>`
  background-color: ${({ isEventSale, isBrandNewSale, theme }) =>
    isEventSale
      ? theme.pallete.primary
      : isBrandNewSale
      ? theme.pallete.secondary
      : null};
  border-radius: 999999px;

  padding: 6px;
`;
