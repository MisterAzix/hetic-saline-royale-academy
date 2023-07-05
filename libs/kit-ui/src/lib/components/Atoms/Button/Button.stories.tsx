import type { Meta } from '@storybook/react';
import Button from './Button';
import { StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atom/Button',
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'destructive'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    size: 'md',
    color: 'primary',
    children: 'Click Me!',
  },
};
