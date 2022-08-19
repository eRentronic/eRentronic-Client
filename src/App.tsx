import React, { Suspense } from 'react';

import { Spinner } from '@/components/common';
import { Main } from '@/Pages/Main';

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Main />
    </Suspense>
  );
}
