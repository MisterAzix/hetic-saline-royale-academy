import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { routes } from '../../routes';
import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { useRouter } from 'next/router';

export function Dashboard() {
  const router = useRouter();
  const id = router.query.id;

  return <h1>Video {id}</h1>;
}

Dashboard.getLayout = (page: ReactElement) => {
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

export default Dashboard;
