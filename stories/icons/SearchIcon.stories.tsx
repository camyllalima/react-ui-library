import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchIcon } from '../../src/icons';

export default {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = args => (
  <SearchIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: '10rem',
  height: '10rem',
  color: '#000',
};
