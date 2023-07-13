import type { Meta } from '@storybook/react';
import Chip from './Chip';
import { StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Atoms/Chip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {
  render: (args) => (
    <Stack spacing={1} direction={'row'}>
      <Chip {...args}>Hello</Chip>
    </Stack>
  ),
  args: {
    color: 'purple-500',
  },
};
