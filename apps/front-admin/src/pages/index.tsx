import { ReactElement } from 'react';
import AuthLayout from '../layout/AuthLayout';
import LoginForm from '../features/login/components/Organisms/LoginForm';

export function Index() {
  return <LoginForm />;
}

Index.getLayout = (page: ReactElement) => {
  return <AuthLayout coverURL={'/images/default_cover.png'}>{page}</AuthLayout>;
};

export default Index;
