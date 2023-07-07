import type { Meta } from '@storybook/react';
import Text from './Text';
import { StoryObj } from '@storybook/react';
import { StorybookTitle } from '../../../../../@types';
import { textPresets } from '../../../../../styles/typograhy/text-presets';

const meta: Meta<typeof Text> & { title: StorybookTitle<'Text'> } = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    preset: {
      control: {
        type: 'select',
      },
      options: textPresets,
      defaultValue: 'text-md-regular',
      description: 'Set text preset',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "I'm a Text Component",
  },
};
