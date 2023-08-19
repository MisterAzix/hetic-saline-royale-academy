import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { routes } from '../../routes';
import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';

export function Dashboard() {
  return <h1>Welcome to content page!</h1>;
}

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Contenu"
      subtitle="Gérer les masterclasses et les chapitres"
      activeRoute={routes.content}
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

export default Dashboard;
