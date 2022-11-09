import styled from 'styled-components';

import { Box } from '../Layout/Box';

conTainer;
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
      <></>
    </Box>
  );
}
