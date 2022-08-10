import { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../common';

const DUMMY_SIDEBAR_MODEL: { [key: string]: { id: number; name: string }[] } = {
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

type CategoryProps = {
  categoryLists: { id: number; name: string }[];
  title: string;
};

function Category({ categoryLists, title }: CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);

  const Vendors = categoryLists.map(({ name }) => <List>{name}</List>);

  return (
    <>
      <CategoryTitle
        forwardedAs="h4"
        typography="Bold"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {title}
      </CategoryTitle>
      <CategoryList isDisplay={isClicked}>{Vendors}</CategoryList>
    </>
  );
}

const CategoryTitles: { [key: string]: string } = {
  vendors: '제조사',
  keyboardConnections: '접점부',
  switches: '스위치',
  layouts: '배열',
};

export function SideTab() {
  const categoryLists = Object.keys(DUMMY_SIDEBAR_MODEL);
  const test = categoryLists.map(key => (
    <Category
      categoryLists={DUMMY_SIDEBAR_MODEL[key]}
      title={CategoryTitles[key]}
    />
  ));

  return (
    <Wrapper>
      <CategoryWrapper>{test}</CategoryWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.pallete.grey5}; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CategoryTitle = styled(Text)`
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.pallete.grey4};
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey2};
    color: ${({ theme }) => theme.pallete.white};
  }
`;

const List = styled.li`
  /* width: 100%; */
  padding: 8px;
  box-sizing: border-box;
  font-weight: 100;
  &:hover {
    background-color: ${({ theme }) => theme.pallete.grey5};
  }
`;
type CategoryListProps = {
  isDisplay: boolean;
};

const CategoryList = styled.ul<CategoryListProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.pallete.grey4};
`;
