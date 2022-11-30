import styled from 'styled-components';

import { Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core';

type StatusContentProps = {
  text: '입금전' | '배송중' | '배송완료' | '이용중';
  count: number | undefined;
};

export function StatusContent({ text, count }: StatusContentProps) {
  const isZero = count === 0;
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10"
    >
      <Text>{text}</Text>
      <StatusNumber isZero={isZero}>{count}</StatusNumber>
    </Container>
  );
}

const StatusNumber = styled.span<{ isZero: boolean }>`
  color: ${({ theme, isZero }) =>
    isZero ? theme.pallete.grey3 : theme.pallete.black};
  font-size: 50px;
`;
