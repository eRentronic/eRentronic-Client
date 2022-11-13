import styled from 'styled-components';

import { Container } from '@/components/common/Layout/Core';

import { Box } from '../Layout/Box';
import { Text } from '../Text';

type PageListType = {
  state: {
    start: number;
    end: number;
    isSkipPage: boolean;
  };
  func: {
    previous: () => void;
    next: () => void;
    onClickPage: () => void;
  };
};
type PageListProps = {
  pageListProps: PageListType;
};

export function PageList({ pageListProps }: PageListProps) {
  const { state, func } = pageListProps;
  const { start, end, isSkipPage } = state;
  const { previous, next, onClickPage } = func;
  return (
    <Box>
      <Container>
        <Text>{start}</Text>
      </Container>
      <Container>
        <Text>{end}</Text>
      </Container>
    </Box>
  );
}
