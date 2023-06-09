import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { FormControl } from '@mui/base';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Atom/Checkbox',
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  render: (args) => (
    <FormControl>
      <Checkbox {...args} />
    </FormControl>
  ),
  args: {
    label: 'Checkbox',
  },
};
