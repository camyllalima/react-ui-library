import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '../../src';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Default = Template.bind({});
