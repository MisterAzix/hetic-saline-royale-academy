import type { Meta } from '@storybook/react';
import Label from './Label';
import { FormControl } from '@mui/base';
import { StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Atom/Label',
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Playground: Story = {
  render: (args) => (
    <FormControl>
      <Label {...args} />
    </FormControl>
  ),
  args: {
    children: 'Label',
  },
};
