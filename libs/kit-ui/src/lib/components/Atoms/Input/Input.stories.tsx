import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { FormControl } from '@mui/base';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Atom/Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  render: (args) => (
    <FormControl>
      <Input {...args} />
    </FormControl>
  ),
  args: {},
};
