import { ComponentStory } from '@storybook/react';

import { Text } from '.';

export default {
  component: Text,
  title: 'Text',
};

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  as: 'div',
};

export const Default: ComponentStory<typeof Text> = args => <Text {...args} />;
