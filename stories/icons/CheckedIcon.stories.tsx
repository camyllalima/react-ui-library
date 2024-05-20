import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckedIcon } from '../../src/icons';

export default {
  title: 'Icons/CheckedIcon',
  component: CheckedIcon,
} as ComponentMeta<typeof CheckedIcon>;

const Template: ComponentStory<typeof CheckedIcon> = args => (
  <CheckedIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: '10rem',
  height: '10rem',
  color: '#000',
};
