import { SyntheticEvent } from 'react';

export const stopEventDelivery = (e: SyntheticEvent) => {
  e.stopPropagation();
};
