import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageList } from '@/components/common/PageList/pageList';

export default {
  component: PageList,
  title: 'View/PageList',
} as ComponentMeta<typeof PageList>;

const Template: ComponentStory<typeof PageList> = args => (
  <PageList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  end: 10,
  focus: 2,
};
export const Skip = Template.bind({});
Skip.args = {
  end: 10,
  focus: 3,
  skipNumber: 6,
};
export const Skip2 = Template.bind({});
Skip2.args = {
  end: 5,
  focus: 3,
  skipNumber: 6,
};
