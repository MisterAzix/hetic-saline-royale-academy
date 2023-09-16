import type { Meta, StoryObj } from '@storybook/react';
import ProgressCircular from './ProgressCircular';

const meta: Meta<typeof ProgressCircular> = {
  component: ProgressCircular,
  title: 'Atoms/ProgressCircular',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;
type Story = StoryObj<typeof ProgressCircular>;

export const Playground: Story = {
  render: () => <ProgressCircular />,
};
