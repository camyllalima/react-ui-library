import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wizard } from '../../src';

export default {
  title: 'Components/Wizard',
  component: Wizard,
} as ComponentMeta<typeof Wizard>;

const Template: ComponentStory<typeof Wizard> = args => <Wizard {...args} />;

export const Default = Template.bind({});

Default.args = {
  steps: [
    {
      value: '1',
      active: false,
      disabled: false,
      icon: <div />,
      title: 'Título da etapa',
      textDescription: 'Descrição da etapa',
      finished: true,
    },
    {
      value: '2',
      active: true,
      disabled: false,
      icon: <div />,
      title: 'Título da etapa',
      textDescription: 'Descrição da etapa',
      finished: true,
    },
    {
      value: '3',
      active: false,
      disabled: false,
      icon: <div />,
      title: 'Título da etapa',
      textDescription: 'Descrição da etapa',
      finished: false,
    },
    {
      value: '4',
      active: false,
      disabled: true,
      icon: <div />,
      title: 'Título da etapa',
      textDescription: 'Descrição da etapa',
      finished: false,
    },
  ],
  onClickStep: () => {},
};
