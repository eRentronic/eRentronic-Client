export const DUMMY_SIDEBAR_MODEL: {
  [key: string]: { id: number; name: string }[];
} = {
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

export const CATEGORY_TITLES: { [key: string]: string } = {
  vendors: '제조사',
  keyboardConnections: '접점부',
  switches: '스위치',
  layouts: '배열',
};
