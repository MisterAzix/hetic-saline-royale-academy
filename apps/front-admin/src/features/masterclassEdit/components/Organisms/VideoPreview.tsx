import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import VideoTitle from '../Atoms/VideoTitle';
import { useGetMasterclass } from '../../hooks';
import { UseFormWatch } from 'react-hook-form';
import { IMasterclassForm } from '../../types';

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
      <video autoPlay src={masterclass.video_url} width={'100%'} />
      <VideoTitle>{title}</VideoTitle>
    </Stack>
  );
};

export default VideoPreview;
