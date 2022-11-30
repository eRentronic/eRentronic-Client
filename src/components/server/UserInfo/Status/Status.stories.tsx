import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Status } from './Status';

export default {
  component: Status,
  title: 'View/Status',
  argTypes: {
    isPurchase: {
      description: '구매 상태인지 결정',
    },
    data: {
      deposit: { description: '결제 완료 ' },
      delivering: { description: '회사측에서 배송중 ' },
      delComplete: { description: '회사측에서 배송 완료 ' },
      using: { description: '사용중 ' },
      usingDelivering: { description: '사용자측에서 배송중 ' },
      usingDelComplete: { description: '사용자측에서 배송 완료 ' },
    },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPurchase: true,
  data: {
    deposit: 1,
    delivering: 0,
    delComplete: 2,
    using: 2,
    usingDelivering: 1,
    usingDelComplete: 0,
  },
};
