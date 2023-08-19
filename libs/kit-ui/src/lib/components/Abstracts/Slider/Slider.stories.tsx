import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { StorybookTitle } from '../../../../../@types';
import Slider from './index';
import {SliderProps} from './Slider'

const meta: Meta<typeof Slider> & { title: StorybookTitle<'Slider'> } = {
  title: 'Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Playground: Story & { args: SliderProps } = {
  args: {},
};
