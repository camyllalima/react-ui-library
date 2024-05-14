import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BasicTable } from '../src';

export default {
  title: 'Components/BasicTable',
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

const Template: ComponentStory<typeof BasicTable> = args => <BasicTable {...args} />;

export const Default = Template.bind({});
