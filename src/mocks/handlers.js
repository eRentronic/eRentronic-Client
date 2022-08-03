import { rest } from 'msw';

export const handlers = [
  rest.get(`/ok`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        result_code: 200,
        result_message: 'OK',
        result_body: 'ok',
      }),
    );
  }),
];
