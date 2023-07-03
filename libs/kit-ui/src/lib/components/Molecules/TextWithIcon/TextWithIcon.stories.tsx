import type { Meta } from '@storybook/react';
import TextWithIcon from './TextWithIcon';
import { StoryObj } from '@storybook/react';
import SearchIcon from '@mui/icons-material/Search';

const meta: Meta<typeof TextWithIcon> = {
  component: TextWithIcon,
  title: 'Molecules/TextWithIcon',
};
export default meta;
type Story = StoryObj<typeof TextWithIcon>;

export const Playground: Story = {
  render: (args) => <TextWithIcon {...args} />,
  args: {
    children: 'TextWithIcon',
    icon: <SearchIcon />,
  },
};
