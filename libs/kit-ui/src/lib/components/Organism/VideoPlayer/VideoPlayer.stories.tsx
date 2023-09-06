import type { Meta, StoryObj } from '@storybook/react';
import VideoPlayer from './VideoPlayer';
import { StorybookTitle } from '../../../../../@types';

const meta: Meta<typeof VideoPlayer> & {
  title: StorybookTitle<'VideoPlayer'>;
} = {
  component: VideoPlayer,
  tags: ['autodocs'],
  title: 'Organism/VideoPlayer',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Playground: Story = {
  args: {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  },
};
