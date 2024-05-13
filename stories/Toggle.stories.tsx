import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toggle } from '../src';
import { ToggleProps } from '../src/components/Toggle/types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => (
  <Toggle {...args} />
);

export const Default = Template.bind({});
