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
  useMasterclassFormSubmit,
  useMasterclassFormValidation,
} from '../../features/masterclassEdit/hooks';
import { Button } from '@hetic-saline-royale-academy/kit-ui';
import { useDebounce } from '../../hooks';
import { Status } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';

export function Masterclass() {
  const router = useRouter();
  const id = router.query.id as string;
  const { masterclass } = useGetMasterclass(id);
  const masterclassFormValidation = useMasterclassFormValidation();
  const { updateMasterclass, isLoading } = useMasterclassFormSubmit();

  const initialValues: IMasterclassForm = {
    id,
    title: masterclass.title,
    description: masterclass.description || '',
  };

  const { handleSubmit, control, reset, watch } = useForm<IMasterclassForm>({
    defaultValues: initialValues,
    resolver: zodResolver(masterclassFormValidation),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const values = watch();
  const debouncedValues = useDebounce<IMasterclassForm>(values, 1000);

  useEffect(() => {
    reset(initialValues);
  }, [masterclass]);

  useEffect(() => {
    try {
      masterclassFormValidation.parse(debouncedValues);
      updateMasterclass(debouncedValues);
    } catch (error) {
      return;
    }
  }, [debouncedValues]);

  return (
    <Stack
      onSubmit={handleSubmit((data) =>
        updateMasterclass({ ...data, status: Status.PUBLISHED })
      )}
      component={'form'}
      direction={'row'}
      spacing={3}
      height={'100%'}
    >
      <Stack flex={1} spacing={2}>
        <Title>{values.title}</Title>
        <InformationsSection control={control} />
      </Stack>
      <Stack flex={1} height={'100%'} justifyContent={'space-between'}>
        <VideoPreview watch={watch} />
        <Button type={'submit'} disabled={isLoading}>
          {isLoading ? 'Enregistrement en cours...' : 'Publier'}
        </Button>
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
