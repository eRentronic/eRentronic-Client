import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.MAIN_PRODUCTS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        content: [
          {
            product: {
              id: 1,
              title: 'HACKER K660',
              content: '축교환 완전방수 게이밍 카일 광축 블랙',
              imageUrl:
                'https://cdn.pixabay.com/photo/2017/03/24/03/20/keyboard-2170063_1280.png',
              price: 53500,
              rentalPrice: 5000,
              rentable: true,
              like: false,
              inBucket: false,
            },
            discountInfo: {
              discounts: [
                {
                  id: 1,
                  title: '이벤트 할인',
                  saleRate: '2.25',
                },
                {
                  id: 2,
                  title: '신제품 할인',
                  saleRate: '10.0',
                },
              ],
              salePrice: 46946,
              saleRentalPrice: 4387,
            },
            vendor: {
              id: 1,
              name: '로지텍',
            },
          },
          {
            product: {
              id: 2,
              title: 'MX_KEYS',
              content: '(정품)',
              imageUrl:
                'https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg',
              price: 146900,
              rentalPrice: 5000,
              rentable: true,
              like: false,
              inBucket: false,
            },
            discountInfo: {
              discounts: [],
              salePrice: 146900,
              saleRentalPrice: 5000,
            },
            vendor: {
              id: 2,
              name: '앱코',
            },
          },
        ],
        pageable: {
          sort: {
            sorted: false,
            unsorted: true,
            empty: true,
          },
          pageNumber: 0,
          pageSize: 9,
          offset: 0,
          paged: true,
          unpaged: false,
        },
        numberOfElements: 9,
        number: 0,
        first: true,
        last: false,
        size: 9,
        sort: {
          sorted: false,
          unsorted: true,
          empty: true,
        },
        empty: false,
      }),
    );
  }),
];
