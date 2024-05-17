import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BasicTable } from '../src';
import { CheckedIcon } from '../src/icons';

export default {
  title: 'Components/BasicTable',
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

const Template: ComponentStory<typeof BasicTable> = args => (
  <BasicTable {...args} />
);

export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Data',
      accessor: 'data',
      Cell: ({ value }) => <div>{value?.date}</div>,
    },
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Colaborador',
      accessor: 'collaborator',
      Cell: ({ value }) => <div>{value?.name}</div>,
    },
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Data',
      accessor: 'data',
      Cell: ({ value }) => <div>{value?.date}</div>,
    },
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Colaborador',
      accessor: 'collaborator',
      Cell: ({ value }) => <div>{value?.name}</div>,
    },
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Data',
      accessor: 'data',
      Cell: ({ value }) => <div>{value?.date}</div>,
    },
    {
      HeaderIcon: <CheckedIcon width="1rem" height="1rem" color="#53565A" />,
      Header: 'Colaborador',
      accessor: 'collaborator',
      Cell: ({ value }) => <div>{value?.name}</div>,
    },
  ],
  data: [
    {
      data: { date: '2023-01-01' },
      collaborator: { name: 'John Doe' },
    },
    {
      data: { date: '2023-02-01' },
      collaborator: { name: 'Jane Smith' },
    },
  ],
  breakpoint: '700px',
};
