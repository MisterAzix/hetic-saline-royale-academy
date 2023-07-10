import type { Meta } from '@storybook/react';
import Text from './Text';
import { StoryObj } from '@storybook/react';
import { StorybookTitle } from '../../../../../@types';
import { textPresets } from '../../../../../styles/typograhy/text-presets';
import { tagName } from './_data/mock';

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
    tag: {
      control: {
        type: 'select',
      },
      options: tagName,
      defaultValue: 'p',
      description: 'Set tag name',
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
