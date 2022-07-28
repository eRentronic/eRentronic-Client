import { ComponentStory } from '@storybook/react';

import { Input } from '.';

export default {
  component: Input,
  title: 'Input',
};

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  as: 'div',
};

export const Default: ComponentStory<typeof Input> = args => (
  <Input {...args} />
);
