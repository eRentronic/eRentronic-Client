import React, { Suspense } from 'react';

import { Main } from '@/Pages/Main';

export function App() {
  return (
    <Suspense fallback={<div>페이지 로딩</div>}>
      <Main />
    </Suspense>
  );
}
