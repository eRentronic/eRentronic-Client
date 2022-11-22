import { ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  as: 'div',
};

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
