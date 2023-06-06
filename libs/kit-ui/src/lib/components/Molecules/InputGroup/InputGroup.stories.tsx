import type { Meta } from '@storybook/react';
import InputGroup from './InputGroup';
import { StoryObj } from '@storybook/react';

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  title: 'Molecules/InputGroup',
};
export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Playground: Story = {
  render: (args) => <InputGroup {...args} />,
  args: {
    name: 'input',
    label: 'Label',
    defaultValue: '',
    helperText: 'Helper text',
    error: false,
    required: false,
    disabled: false,
  },
};
