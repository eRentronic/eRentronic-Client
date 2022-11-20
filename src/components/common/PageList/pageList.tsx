import { useState } from 'react';

import { PageNumber } from './PageNumber';

import { Icon } from '../Icon';
import { Container } from '../Layout/Core';

type PageListProps = {
  start?: number;
  end: number;
  focus: number;
  skipNumber?: number;
};

const makePageNumberArr = (start: number, end: number) => {
  const pageNumArr = [];
  for (let i = start; i <= end; i += 1) {
    pageNumArr.push(i);
  }
  return pageNumArr;
};
export function PageList({
  start = 1,
  end,
  focus,
  skipNumber = end,
}: PageListProps) {
  const [list, setList] = useState({ listStart: start, listEnd: skipNumber });
  const { listStart, listEnd } = list;
  const [listStartNext, listEndPrev] = [listStart + 1, listEnd - 1];
  const mid = Math.floor((listStart + listEnd) / 2);
  const pageNumberArr = makePageNumberArr(start, end);

  const increaseList = (num: number) => {
    setList({
      ...list,
      listStart: listStart + num,
      listEnd: listEnd + num,
    });
  };

  const decreaseList = (num: number) => {
    setList({
      ...list,
      listStart: listStart - num,
      listEnd: listEnd - num,
    });
  };

  const selectModification = (num: number) => {
    const difference = Math.abs(focus - num);
    if (num > focus) {
      increaseList(difference);
    } else if (num < focus) {
      decreaseList(difference);
    }
  };
  const onClickPageNumber = (num: number) => () => {
    if (num !== focus) {
      selectModification(num);
    }
  };

  const checkFirstPageList = () => listStart !== 1;
  const checkLastPageList = () => listEnd !== end;

  const pages =
    skipNumber >= end ? (
      pageNumberArr.map((num, idx) =>
        idx + 1 === focus ? (
          <PageNumber content={num} isFocus />
        ) : (
          <PageNumber content={num} onClickPageNumber={onClickPageNumber} />
        ),
      )
    ) : (
      <>
        <PageNumber content={listStart} onClickPageNumber={onClickPageNumber} />
        <PageNumber
          content={listStartNext}
          onClickPageNumber={onClickPageNumber}
        />
        <PageNumber content="..." />
        <PageNumber content={mid} isFocus />
        <PageNumber content="..." />
        <PageNumber
          content={listEndPrev}
          onClickPageNumber={onClickPageNumber}
        />
        <PageNumber content={listEnd} onClickPageNumber={onClickPageNumber} />
      </>
    );

  const prevBtn = checkFirstPageList() && <Icon iconSrc="PREV" />;
  const nextBtn = checkLastPageList() && <Icon iconSrc="NEXT" />;
  return (
    <Container
      backgroundColor="none"
      justifyContent="center"
      alignItem="center"
      gap={15}
    >
      {prevBtn}
      {pages}
      {nextBtn}
    </Container>
  );
}
