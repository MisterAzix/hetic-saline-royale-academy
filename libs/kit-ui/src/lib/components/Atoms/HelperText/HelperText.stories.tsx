import type { Meta } from '@storybook/react';
import HelperText from './HelperText';
import { StoryObj } from '@storybook/react';
import { FormControl } from '@mui/base';

const meta: Meta<typeof HelperText> = {
  component: HelperText,
  title: 'Atom/HelperText',
};
export default meta;
type Story = StoryObj<typeof HelperText>;

export const Playground: Story = {
  render: (args) => (
    <FormControl>
      <HelperText {...args} />
    </FormControl>
  ),
  args: {
    children: 'HelperText',
  },
};
