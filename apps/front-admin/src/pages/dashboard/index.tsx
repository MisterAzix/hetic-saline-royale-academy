import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { routes } from '../../routes';
import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';

export function Dashboard() {
  return <h1>Welcome to DASHBOARD!</h1>;
}

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Toutes les informations importantes en un coup d'oeil"
      activeRoute={routes.dashboard}
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
