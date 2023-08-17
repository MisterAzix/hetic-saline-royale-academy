import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

function Progress() {
  return <h1>Progress</h1>;
}

Progress.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Ma progression"
      subtitle="Suivre ma progression, mes badges et mes statistiques"
      activeRoute={routes.progress}
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

export default Progress;
