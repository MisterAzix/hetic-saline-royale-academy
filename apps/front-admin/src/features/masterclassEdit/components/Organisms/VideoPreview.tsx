import { VideoPlayer } from '@hetic-saline-royale-academy/kit-ui';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { UseFormWatch } from 'react-hook-form';
import { useGetMasterclass } from '../../hooks';
import { IMasterclassForm } from '../../types';
import VideoTitle from '../Atoms/VideoTitle';

interface VideoPreviewProps {
  watch: UseFormWatch<IMasterclassForm>;
}

const VideoPreview = ({ watch }: VideoPreviewProps) => {
  const router = useRouter();
  const id = router.query.id as string;
  const { masterclass, isMasterclassLoading } = useGetMasterclass(id);

  const title = watch('title');

  if (isMasterclassLoading) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <VideoPlayer url={masterclass.video_url} title={title} />
      <VideoTitle>{title}</VideoTitle>
    </Stack>
  );
};

export default VideoPreview;
