import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RentHistoryCard } from './RentHistoryCard';

export default {
  title: 'View/Test/RentHistoryCard',
  component: RentHistoryCard,
} as ComponentMeta<typeof RentHistoryCard>;

const Template: ComponentStory<typeof RentHistoryCard> = args => (
  <RentHistoryCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  imgSrc: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
  productName: '테스트 이름',
  productPrice: 100000,
  deliveryRate: 100,
  rentRate: 50,
  options: ['1번 옵션', '2번 옵션'],
};
