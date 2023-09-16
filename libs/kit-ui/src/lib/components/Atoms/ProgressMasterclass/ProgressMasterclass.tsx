import { Card, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { palette } from '../../../palette';
import { ComponentProps } from 'react';
import Text from '../Text';
import ProgressCircular from '../ProgressCircular';
import Image from 'next/image';

const StyledProgressMasterclass = styled(Card)<{ image?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 800px;
  padding: 0 20px 0 ${({ image }) => (image ? 0 : '20px')};
  background-color: ${palette.primary[600]};
  border-radius: 8px;
`;

const ImageCard = styled(Image)`
  object-fit: cover;
`;

const _ProgressMasterclass = ({
  title,
  subtitle,
  image,
  progression,
  ...props
}: ComponentProps<typeof Card> & {
  title: string;
  subtitle: string;
  image?: string;
  progression?: string | '0';
  numberOfChildren?: number;
}) => {
  return (
    <StyledProgressMasterclass image={image} {...props}>
      <Stack flexDirection={'row'} gap={2}>
        {image && <ImageCard src={image} alt="Image" width={80} height={80} />}
        <Stack justifyContent={'center'}>
          <Text preset="text-md-medium" color="gray-25">
            {title}
          </Text>
          <Text preset="text-xs-medium" color="gray-25">
            {subtitle}
          </Text>
        </Stack>
      </Stack>
      <ProgressCircular progress={progression} />
    </StyledProgressMasterclass>
  );
};

export default _ProgressMasterclass;
