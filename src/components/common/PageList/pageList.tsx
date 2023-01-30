import { Dispatch, useState } from 'react';

import { PageNumber } from './PageNumber';

import { Icon } from '../Icon';
import { Container } from '../Layout/Core';

type PageListProps = {
  start?: number;
  end: number;
  focus: number;
  setFocus: Dispatch<number>;
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
  setFocus,
}: PageListProps) {
  const [list, setList] = useState({
    listStart: start,
    listEnd: skipNumber,
    listArr: makePageNumberArr(start, skipNumber),
  });

  const { listStart, listEnd, listArr } = list;
  const fullPageNumberArr = makePageNumberArr(start, end);
  const onClickPageNumber = (num: number) => () => {
    setFocus(num);
  };

  const onclickPrevBtn = () => {
    goPrevList();
  };
  const onClickNextBtn = () => {
    goNextList();
  };

  const checkFirstPageList = () => listStart !== 1;
  const checkLastPageList = () => listEnd !== end;

  const goNextList = () => {
    const newListStart = listStart + skipNumber;
    const newListEnd = listEnd + skipNumber > end ? end : listEnd + skipNumber;
    setList({
      ...list,
      listStart: newListStart,
      listEnd: newListEnd,
      listArr: makePageNumberArr(newListStart, newListEnd),
    });
    setFocus(newListStart);
  };
  const goPrevList = () => {
    const newListStart = listStart - skipNumber;
    const newListEnd =
      listEnd === end
        ? listEnd - skipNumber + (end % skipNumber)
        : listEnd - skipNumber;
    setList({
      ...list,
      listStart: newListStart,
      listEnd: newListEnd,
      listArr: makePageNumberArr(newListStart, newListEnd),
    });
    setFocus(newListEnd);
  };
  const getPageList = (arr: number[]) => {
    return arr.map(num =>
      num === focus ? (
        <PageNumber content={num} isFocus />
      ) : (
        <PageNumber content={num} onClickPageNumber={onClickPageNumber} />
      ),
    );
  };
  const skipPageList = getPageList(listArr);
  const pages =
    skipNumber >= end ? (
      getPageList(fullPageNumberArr)
    ) : listStart === 1 ? (
      <>
        {skipPageList}
        <PageNumber content="..." />
      </>
    ) : listEnd === end ? (
      <>
        <PageNumber content="..." />
        {skipPageList}
      </>
    ) : (
      <>
        <PageNumber content="..." />
        {skipPageList}
        <PageNumber content="..." />
      </>
    );

  const prevBtn = checkFirstPageList() && skipNumber !== end && (
    <Icon iconSrc="PREV" width={30} height={30} onClick={onclickPrevBtn} />
  );
  const nextBtn = checkLastPageList() && skipNumber !== end && (
    <Icon iconSrc="NEXT" width={30} height={30} onClick={onClickNextBtn} />
  );
  return (
    <Container
      backgroundColor="none"
      justifyContent="center"
      alignItems="center"
      gap={15}
    >
      <>
        {prevBtn}
        {pages}
        {nextBtn}
      </>
    </Container>
  );
}
