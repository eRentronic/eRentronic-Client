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
