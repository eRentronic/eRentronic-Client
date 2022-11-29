import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Status } from './Status';

export default {
  component: Status,
  title: 'View/Status',
  argTypes: {
    isPurchase: {
      description: '구매 상태인지 결정',
    },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPurchase: true,
};
