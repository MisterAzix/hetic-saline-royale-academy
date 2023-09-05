import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';
import CourseListe from '../../features/courses/components/Organisms/CourseListe';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { authOptions } from '../api/auth/[...nextauth]';

const Courses = () => {
  return <CourseListe />;
};

Courses.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mes cours"
      subtitle="Rechercher parmi vos cours"
      activeRoute={routes.courses}
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

export default Courses;
