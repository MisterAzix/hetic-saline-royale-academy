import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import VideoTitle from '../Atoms/VideoTitle';
import { useGetMasterclass } from '../../hooks';
import { UseFormWatch } from 'react-hook-form';
import { IMasterclassForm } from '../../types';
import { VideoPlayer } from '@hetic-saline-royale-academy/kit-ui';

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
      <VideoPlayer url={masterclass.video_url} />
      <VideoTitle>{title}</VideoTitle>
    </Stack>
  );
};

export default VideoPreview;
