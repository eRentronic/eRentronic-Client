import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableImageContainer } from './Editable';

export default {
  title: 'View/Layout/EditableImageContainer',
  component: EditableImageContainer,
} as ComponentMeta<typeof EditableImageContainer>;

const Template: ComponentStory<typeof EditableImageContainer> = args => (
  <EditableImageContainer {...args} />
);

export const Default = Template.bind({});

export const Size = Template.bind({});

Size.decorators = [
  Story => (
    <>
      <EditableImageContainer size="large" />
      <EditableImageContainer size="medium" />
      <EditableImageContainer size="small" />
    </>
  ),
];
