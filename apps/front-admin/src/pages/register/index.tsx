import { ReactElement } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import RegisterForm from '../../features/register/components/Organisms/RegisterForm';

export function Register() {
  return <RegisterForm />;
}

Register.getLayout = (page: ReactElement) => {
  return <AuthLayout coverURL={'/images/default_cover.png'}>{page}</AuthLayout>;
};

export default Register;
