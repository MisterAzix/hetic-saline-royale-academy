import { Card } from '@mui/material';
import styled from '@emotion/styled';
import { palette } from '../../../palette';
import { ComponentProps } from 'react';
import Image from 'next/image';

const StyledCard = styled(Card)<{ orientation?: string }>`
  max-width: ${(props) =>
    props.orientation === 'horizontal' ? '100%' : '250px'};
  min-height: ${(props) =>
    props.orientation === 'horizontal' ? '150px' : '200px'};
  max-height: ${(props) =>
    props.orientation === 'horizontal' ? '180px' : '100%'};
  border-radius: 8px;
  background-color: ${palette.gray[25]};
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === 'horizontal' ? 'row' : 'column'};
`;

const ImageCard = styled(Image)`
  object-fit: cover;
`;

const _Card = ({
  children,
  image,
  orientation,
  ...props
}: ComponentProps<typeof Card> & { image?: string; orientation?: string }) => {
  return (
    <StyledCard orientation={orientation} {...props}>
      {image && <ImageCard src={image} alt="Image" width={250} height={200} />}
      {children}
    </StyledCard>
  );
};

export default _Card;
