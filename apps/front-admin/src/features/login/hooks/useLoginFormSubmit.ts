import { ILoginForm } from '../types';
import { signIn, SignInResponse } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';

export const useLoginFormSubmit = () => {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const submitLoginForm = async (data: ILoginForm) => {
    if (isError) {
      setIsError(false);
    }
    const { ok } = (await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })) as SignInResponse;

    if (ok) {
      return router.push(routes.dashboard);
    }

    setIsError(!ok);
  };

  return { submitLoginForm, isError };
};
