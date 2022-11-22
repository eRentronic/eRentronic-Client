import styled from 'styled-components';

import { Text } from '@/components/common';

type SaleLabelProps = {
  title: '이벤트 할인' | '신제품 할인';
};

export function SaleLabel({ title }: SaleLabelProps) {
  return (
    <StyledLabel title={title}>
      <Text typography="Light" styles={{ fontSize: '5px' }}>
        {title}
      </Text>
    </StyledLabel>
  );
}

const StyledLabel = styled.div<SaleLabelProps>`
  display: flex;
  align-items: center;
  background-color: ${({ title, theme }) =>
    title === '이벤트 할인'
      ? theme.pallete.primary
      : title === '신제품 할인'
      ? theme.pallete.secondary
      : 'none'};
  border-radius: 999999px;
  padding: 4px;
`;
