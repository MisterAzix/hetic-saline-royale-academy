import type { Meta, StoryObj } from '@storybook/react';
import ProgressCard from './ProgressCard';
import { CardContent } from '@mui/material';
import Text from '../Text/Text';
import { Stack } from '@mui/material';


const meta: Meta<typeof ProgressCard> = {
  component: ProgressCard,
  title: 'Atoms/ProgressCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfChildren :
    {control : {
      type : 'number',
    }},
    orientation : {
      options: ['row', 'column']
    }
  },
};
export default meta;
type Story = StoryObj<typeof ProgressCard>;

export const Playground: Story = {
  render: ({numberOfChildren, ...args}) => (
    <Stack spacing={1} direction={args.orientation} >
      {[...Array(numberOfChildren).keys()].map(n => (
        <ProgressCard {...args}>
        <CardContent>
          <Text preset="text-xl-bold" color="gray-25">
            Exemple de titre de carte
          </Text>
          <Text preset="text-sm-regular" color="gray-25">
            Exemple de Tracker
          </Text>
        </CardContent>
      </ProgressCard>
      ))}
    
    </Stack>
  ),
  args: {
   numberOfChildren : 2,
   orientation : 'row'
  },
};
