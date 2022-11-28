import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserInfo } from './UserInfo';

export default {
  title: 'View/Test/UserInfo',
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = () => <UserInfo />;

export const Default = Template.bind({});
