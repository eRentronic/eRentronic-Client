import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Line } from './Line';

export default { title: 'View/Line', component: Line } as ComponentMeta<
  typeof Line
>;

const Template: ComponentStory<typeof Line> = args => <Line {...args} />;

export const Default = Template.bind({});
