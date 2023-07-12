import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { CardContent, Divider } from '@mui/material';
import Text from '../Text/Text';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Atoms/Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['vertical', 'horizontal'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <Text preset="text-lg-semibold" color="gray_900">
          Exemple de titre de carte
        </Text>
        <Text preset="text-xs-regular" color="gray_700">
          Il y a 2 jours
        </Text>
        <Divider sx={{ my: 1 }} />
        <Text preset="text-sm-regular" color="gray_500">
          Exemple de description de carte : Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quae, id deleniti. Hic, beatae
          blanditiis aspernatur mollitia autem ea voluptas nostrum enim a quia
          obcaecati ipsam.
        </Text>
      </CardContent>
    </Card>
  ),
  args: {
    orientation: 'vertical',
    image: 'https://picsum.photos/200',
  },
};
