import { ReactElement } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import LoginForm from '../../features/login/components/Organisms/LoginForm';
import { getServerSession } from 'next-auth';
import { GetServerSidePropsContext } from 'next';
import { routes } from '../../routes';
import { authOptions } from '../api/auth/[...nextauth]';

export function Index() {
  return <LoginForm />;
}

Index.getLayout = (page: ReactElement) => {
  return <AuthLayout coverURL={'/images/default_cover.png'}>{page}</AuthLayout>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: routes.dashboard } };
  }

  return {
    props: {},
  };
}

export default Index;
