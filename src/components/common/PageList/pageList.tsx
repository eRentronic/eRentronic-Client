import styled from 'styled-components';

import { PageNumber } from './PageNumber';

import { Icon } from '../Icon';
import { Container } from '../Layout/Core';

type PageListType = {
  state: {
    start: number;
    end: number;
    isSkipPage: boolean;
  };
  // func: {
  //   previous: () => void;
  //   next: () => void;
  //   onClickPage: () => void;
  // };
};
type PageListProps = {
  pageListProps: PageListType;
};
const makePageNumberArr = (start: number, end: number) => {
  const pageNumArr = [];
  for (let i = start; i <= end; i += 1) {
    pageNumArr.push(i);
  }
  return pageNumArr;
};
export function PageList({ pageListProps }: PageListProps) {
  const { state, func } = pageListProps;
  const { start, end, isSkipPage } = state;
  // const { previous, next, onClickPage } = func;
  const mid = Math.floor((start + end) / 2);

  const pageNumberArr = makePageNumberArr(start, end);
  const pages = !isSkipPage ? (
    pageNumberArr.map(num => <PageNumber content={num} />)
  ) : (
    <>
      <PageNumber content={start} />
      <PageNumber content={start + 1} />
      <PageNumber content="..." />
      <PageNumber content={mid} />
      <PageNumber content="..." />
      <PageNumber content={end - 1} />
      <PageNumber content={end} />
    </>
  );
  return (
    <Container
      backgroundColor="none"
      justifyContent="center"
      alignItem="center"
      gap={10}
    >
      <Icon iconSrc="PREV" />
      {pages}
      <Icon iconSrc="NEXT" />
    </Container>
  );
}
