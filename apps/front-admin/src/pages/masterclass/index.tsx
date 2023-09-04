import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { routes } from '../../routes';
import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { Stack } from '@mui/material';
import { Button } from '@hetic-saline-royale-academy/kit-ui';
import { useToggle } from '../../hooks';
import MasterclassTable from '../../features/masterclass/components/Organisms/MasterclassTable';
import UploadMasterclassModal from '../../features/masterclass/components/Organisms/UploadMasterclassModal';

export function Masterclasses() {
  const { isOpen, onOpen, onClose } = useToggle();

  return (
    <>
      <UploadMasterclassModal isOpen={isOpen} onClose={onClose} />
      <Stack spacing={2} maxHeight={'100%'}>
        <Stack alignItems={'flex-end'}>
          <Button onClick={onOpen}>Ajouter une masterclasse</Button>
        </Stack>
        <MasterclassTable />
      </Stack>
    </>
  );
}

Masterclasses.getLayout = (page: ReactElement) => {
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

export default Masterclasses;
