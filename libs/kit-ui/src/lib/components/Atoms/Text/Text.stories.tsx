import type { Meta } from '@storybook/react';
import Text, { TextProps } from './Text';
import { StoryObj } from '@storybook/react';
import { StorybookTitle } from '../../../../../@types';
import { textPresets } from '../../../styles/typograhy/text-presets';
import { colorPresets, tagName } from './_data/mock';
import { generateStorybookControl } from '../../../../../utils';

const meta: Meta<typeof Text> & { title: StorybookTitle<'Text'> } = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...generateStorybookControl<TextProps, typeof textPresets>('preset', {
      type: 'select',
      options: textPresets,
      defaultValue: 'text-md-regular',
      description: 'Set text preset',
    }),
    ...generateStorybookControl<TextProps, typeof tagName>('tag', {
      type: 'select',
      options: tagName,
      defaultValue: 'p',
      description: 'Set text preset',
    }),
    ...generateStorybookControl<TextProps, typeof colorPresets>('color', {
      type: 'select',
      options: colorPresets,
      defaultValue: 'success-500',
    }),
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "I'm a Text Component",
  },
};
