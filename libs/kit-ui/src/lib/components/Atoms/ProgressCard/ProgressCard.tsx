import { Card } from '@mui/material';
import styled from '@emotion/styled';
import { palette } from '../../../palette';
import { ComponentProps } from 'react';
import Text from '../Text';

const StyledProgressCard = styled(Card)`
  height: 200px;
  width: 200px;
  padding: 0 15px;
  background-color: ${palette.primary[600]};
  border-radius: 8px;
`;

const _ProgressCard = ({
  title,
  subtitle,
  ...props
}: ComponentProps<typeof Card> & {
  title?: string;
  subtitle?: string;
  numberOfChildren?: number;
  orientation?: 'column' | 'row';
}) => {
  return (
    <StyledProgressCard {...props}>
      <Text css="margin : 1rem 0;" preset="display-md-bold" color="gray-25">
        {title}
      </Text>
      <Text css="margin : 1rem 0;" preset="text-md-medium" color="gray-25">
        {subtitle}
      </Text>
    </StyledProgressCard>
  );
};

export default _ProgressCard;
