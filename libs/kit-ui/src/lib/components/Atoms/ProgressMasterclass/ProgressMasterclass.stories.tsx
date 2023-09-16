import type { Meta, StoryObj } from '@storybook/react';
import ProgressMasterclass from './ProgressMasterclass';
import { Stack } from '@mui/material';

const meta: Meta<typeof ProgressMasterclass> = {
  component: ProgressMasterclass,
  title: 'Atoms/ProgressMasterclass',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfChildren: {
      control: {
        type: 'number',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ProgressMasterclass>;

export const Playground: Story = {
  render: ({ numberOfChildren, ...args }) => (
    <Stack spacing={1}>
      {[...Array(numberOfChildren).keys()].map((n) => (
        <ProgressMasterclass
          {...args}
          title="Cours 1 : Le violon"
          subtitle="Encore quelques efforts pour terminer ce cours ! Vous y êtes presque !"
        />
      ))}
    </Stack>
  ),
  args: {
    numberOfChildren: 1,
    image: 'https://picsum.photos/200',
  },
};
