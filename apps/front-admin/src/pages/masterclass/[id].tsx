import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { routes } from '../../routes';
import { ReactElement, useEffect } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import Title from '../../features/masterclassEdit/components/Atoms/Title';
import InformationsSection from '../../features/masterclassEdit/components/Organisms/InformationsSection';
import VideoPreview from '../../features/masterclassEdit/components/Organisms/VideoPreview';
import { useForm } from 'react-hook-form';
import { IMasterclassForm } from '../../features/masterclassEdit/types';
import {
  useGetMasterclass,
  useUpdateMasterclass,
} from '../../features/masterclassEdit/hooks';
import { Button } from '@hetic-saline-royale-academy/kit-ui';

export function Masterclass() {
  const router = useRouter();
  const id = router.query.id as string;
  const { masterclass } = useGetMasterclass(id);
  const { updateMasterclass } = useUpdateMasterclass();

  const initialValues: IMasterclassForm = {
    id,
    title: masterclass.title,
    description: masterclass.description || '',
  };

  const { handleSubmit, control, reset, watch } = useForm<IMasterclassForm>({
    defaultValues: initialValues,
  });

  const title = watch('title');

  useEffect(() => {
    reset(initialValues);
  }, [masterclass]);

  return (
    <Stack
      onSubmit={handleSubmit((data) => updateMasterclass(data))}
      component={'form'}
      direction={'row'}
      spacing={3}
      height={'100%'}
    >
      <Stack flex={1} spacing={2}>
        <Title>{title}</Title>
        <InformationsSection control={control} />
      </Stack>
      <Stack flex={1} height={'100%'} justifyContent={'space-between'}>
        <VideoPreview watch={watch} />
        <Button type={'submit'}>Publier</Button>
      </Stack>
    </Stack>
  );
}

Masterclass.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Masterclasses"
      subtitle="Gérer les masterclasses et les chapitres"
      activeRoute={routes.masterclass}
    >
      {page}
    </DashboardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: routes.login } };
  }

  return { props: { session } };
}

export default Masterclass;
