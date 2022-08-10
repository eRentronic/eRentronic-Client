import { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../common';

const DUMMY_SIDEBAR_MODEL = {
  vendors: [
    {
      id: 1,
      name: '로지텍',
    },
    {
      id: 2,
      name: '앱코',
    },
    {
      id: 3,
      name: '콕스',
    },
    {
      id: 4,
      name: '레오폴드',
    },
    {
      id: 5,
      name: '해피해킹',
    },
    {
      id: 6,
      name: '리얼포스',
    },
  ],
  keyboardConnections: [
    {
      id: 1,
      name: '유선',
    },
    {
      id: 2,
      name: '무선',
    },
    {
      id: 3,
      name: '블루투스',
    },
  ],
  switches: [
    {
      id: 1,
      name: '청축',
    },
    {
      id: 2,
      name: '갈축',
    },
    {
      id: 3,
      name: '적축',
    },
    {
      id: 4,
      name: '흑축',
    },
    {
      id: 5,
      name: '무소음 적축',
    },
  ],
  layouts: [
    {
      id: 1,
      name: '기본',
    },
    {
      id: 2,
      name: '텐키리스',
    },
    {
      id: 3,
      name: '75%',
    },
    {
      id: 4,
      name: '65%',
    },
  ],
};

function Category({
  categoryLists,
}: {
  categoryLists: { id: number; name: string }[];
}) {
  const test = Object.keys(DUMMY_SIDEBAR_MODEL);
  console.log(test);
  const [isClicked, setIsClicked] = useState(false);
  const Vendors = categoryLists.map(({ name }) => (
    <List isDisplay={isClicked}>{name}</List>
  ));

  return (
    <>
      <CategoryTitle
        forwardedAs="h4"
        typography="Bold"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        테스트 카테고리
      </CategoryTitle>
      {Vendors}
    </>
  );
}

export function SideTab() {
  const { vendors, keyboardConnections, switches } = DUMMY_SIDEBAR_MODEL;
  return (
    <Wrapper>
      <CategoryWrapper>
        <Category categoryLists={vendors} />
        <Category categoryLists={keyboardConnections} />
        <Category categoryLists={switches} />
      </CategoryWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const CategoryWrapper = styled.ul`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.pallete.grey5};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CategoryTitle = styled(Text)`
  padding: 10px;
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey1};
    color: ${({ theme }) => theme.pallete.white};
  }
`;

type ListProps = {
  isDisplay: boolean;
};

const List = styled.li<ListProps>`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-weight: 100;
  display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey6};
  }
`;
