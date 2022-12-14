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
          {
            product: {
              id: 11,
              title: 'FC750RBT PD',
              content: '화이트 블루스타 한글',
              imageUrl:
                'https://cdn.pixabay.com/photo/2015/10/17/17/38/keyboard-992915_960_720.png',
              price: 164320,
              quantity: 10,
              rentalPrice: 5000,
              rentalProductQuantity: 5,
              rentable: true,
              like: false,
              inBucket: false,
            },
            discountInfo: {
              discounts: [],
              salePrice: 164320,
              saleRentalPrice: 5000,
            },
            vendor: {
              id: 11,
              name: '로지텍',
            },
          },
          {
            product: {
              id: 10,
              title: 'G913 TKL',
              content: '(정품)',
              imageUrl:
                'https://cdn.pixabay.com/photo/2013/08/25/11/41/keyboard-175614_960_720.jpg',
              price: 249000,
              quantity: 10,
              rentalPrice: 5000,
              rentalProductQuantity: 5,
              rentable: true,
              like: false,
              inBucket: false,
            },
            discountInfo: {
              discounts: [
                {
                  id: 2,
                  title: '신제품 할인',
                  saleRate: '10.0',
                },
              ],
              salePrice: 224100,
              saleRentalPrice: 4500,
            },
            vendor: {
              id: 1,
              name: '로지텍',
            },
          },
          {
            product: {
              id: 9,
              title: 'HACKER K660M',
              content: '이색사출 PBT 체리 키보드 미드나잇그린',
              imageUrl:
                'https://cdn.pixabay.com/photo/2018/08/19/15/58/mac-3616959_960_720.jpg',
              price: 75000,
              quantity: 10,
              rentalPrice: 5000,
              rentalProductQuantity: 5,
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
              ],
              salePrice: 73312,
              saleRentalPrice: 4887,
            },
            vendor: {
              id: 1,
              name: '로지텍',
            },
          },
          {
            product: {
              id: 8,
              title: 'NP900RBT PD',
              content: '화이트투톤 한글 ',
              imageUrl:
                'https://cdn.pixabay.com/photo/2015/09/09/22/03/keyboard-933680_960_720.jpg',
              price: 166970,
              quantity: 10,
              rentalPrice: 5000,
              rentalProductQuantity: 5,
              rentable: true,
              like: false,
              inBucket: false,
            },
            discountInfo: {
              discounts: [
                {
                  id: 2,
                  title: '신제품 할인',
                  saleRate: '10.0',
                },
              ],
              salePrice: 150273,
              saleRentalPrice: 4500,
            },
            vendor: {
              id: 1,
              name: '로지텍',
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
  rest.post(`/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json({ login: true }));
  }),
  rest.get('http://3.35.58.239:8080/api/orders', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 1',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 2,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 2',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 0,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 3',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 3,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 4',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 4,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 5',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 5,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
        {
          address: {
            address1: '성남',
            address2: '서울이 아니라',
            fullAddress: '위에 합친거',
            zipCode: '12321',
          },
          createAt: '2022-12-13T06:48:10.811Z',
          orderHistoryResponses: [
            {
              discountDetail: 'string',
              dtype: 'string',
              orderId: 0,
              price: 0,
              product: {
                content: 'string',
                id: 0,
                imageUrl: '에러 나야함',
                inBucket: true,
                like: true,
                price: 0,
                quantity: 0,
                rentable: true,
                rentalPrice: 0,
                rentalProductQuantity: 0,
                title: '테스트 제품 6',
              },
              quantity: 0,
              salePrice: 0,
              totalDiscountRate: 0,
            },
          ],
          orderSheetId: 6,
          state: 'CANCELED',
          totalPrice: 123456789,
        },
      ]),
    );
  }),
];
