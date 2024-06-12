import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Gauge } from '../../src';

export default {
  title: 'Components/Gauge',
  component: Gauge,
} as ComponentMeta<typeof Gauge>;

const Template: ComponentStory<typeof Gauge> = args => <Gauge {...args} />;

export const Default = Template.bind({});
