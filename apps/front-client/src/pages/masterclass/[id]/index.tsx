import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useGetMasterclass } from '../../../features/masterclass/hooks/useGetMasterclass';
import DashboardLayout from '../../../layout/DashboardLayout';
import { routes } from '../../../routes';
import { authOptions } from '../../api/auth/[...nextauth]';

const MasterClassDetail = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const { masterclass, isMasterclassLoading } = useGetMasterclass(id as string);

  if (isMasterclassLoading || !masterclass) {
    return null;
  }
  console.log('masterclass', masterclass);

  return <div>test masterclass {id}</div>;
};
MasterClassDetail.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon masterclass"
      subtitle="Les détails de mon masterclass"
      activeRoute={routes.masterclass}
    >
      {page}
    </DashboardLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: routes.login } };
  }

  return { props: { session } };
};

export default MasterClassDetail;
