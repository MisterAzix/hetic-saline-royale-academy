import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';
import CourseListe from '../../features/explore/components/Organisms/CourseListe';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { authOptions } from '../api/auth/[...nextauth]';

const Explore = () => {
  return <CourseListe />;
};

Explore.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Explorer"
      subtitle="Rechercher les cours disponibles"
      activeRoute={routes.explore}
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

export default Explore;
