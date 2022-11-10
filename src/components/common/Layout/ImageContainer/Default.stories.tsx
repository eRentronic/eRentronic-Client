import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageContainer } from './Default';

export default {
  title: 'View/Layout/ImageContainer',
  component: ImageContainer,
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = args => (
  <ImageContainer {...args} />
);

export const Default = Template.bind({});

export const Size = Template.bind({});

Size.decorators = [
  Story => (
    <>
      <ImageContainer size="large" alt="" />
      <ImageContainer size="medium" alt="" />
      <ImageContainer size="small" alt="" />
    </>
  ),
];
