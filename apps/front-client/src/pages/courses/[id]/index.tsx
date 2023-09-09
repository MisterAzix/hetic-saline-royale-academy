import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';
import Course from '../../../features/courses/components/Organisms/CourseDetail';
import DashboardLayout from '../../../layout/DashboardLayout';
import { routes } from '../../../routes';
import { authOptions } from '../../api/auth/[...nextauth]';

const CourseDetail = () => {
  const router: NextRouter = useRouter();

  const { id } = router.query;

  return <Course id={id as string} />;
};
CourseDetail.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon cours"
      subtitle="Les détails de mon cours"
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

export default CourseDetail;
