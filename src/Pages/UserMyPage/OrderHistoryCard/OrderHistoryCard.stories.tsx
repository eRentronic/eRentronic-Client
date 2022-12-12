import { ComponentMeta, ComponentStory } from '@storybook/react';

import { OrderHistoryCard } from './OrderhistoryCard';

export default {
  title: 'View/Test/OrderHistoryCard',
  component: OrderHistoryCard,
} as ComponentMeta<typeof OrderHistoryCard>;

const Template: ComponentStory<typeof OrderHistoryCard> = args => (
  <OrderHistoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageURL: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
  productName: '테스트 이름',
  productPrice: 100000,
  options: ['1번 옵션', '2번 옵션'],
};
