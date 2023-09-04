import { useMutation } from '@tanstack/react-query';
import { IRegisterForm } from '../types';
import * as process from 'process';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';

const fetchRegisterFormSubmit = async (data: IRegisterForm) => {
  const url = new URL('/api/auth/signup', process.env.API_URL);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error();
  }

  return await response.json();
};

export const useRegisterFormSubmit = () => {
  const router = useRouter();

  const { mutate, isLoading, isError } = useMutation(fetchRegisterFormSubmit, {
    onSuccess: async () => {
      await router.push(routes.login);
    },
  });

  return { submitRegisterForm: mutate, isLoading, isError };
};
