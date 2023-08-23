import { GridRenderCellParams, GridValidRowModel } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import Image from 'next/image';
import VideoTitle from '../Atoms/VideoTitle';
import VideoDescription from '../Atoms/VideoDescription';
import { VideoProps } from '../../types';

const Video = ({
  value,
}: GridRenderCellParams<GridValidRowModel, VideoProps>) => {
  if (!value) {
    return null;
  }

  const { title, description, thumbnail } = value;
  return (
    <Stack spacing={2} direction={'row'}>
      <Image
        src={thumbnail || '/images/default_thumbnail.png'}
        alt={''}
        width={128}
        height={72}
      />
      <Stack>
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription>{description}</VideoDescription>
      </Stack>
    </Stack>
  );
};

export default Video;
