import { useMutation } from '@tanstack/react-query';
import { IRegisterForm } from '../types';
import * as process from 'process';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';

const fetchRegisterFormSubmit = async (data: IRegisterForm) => {
  const response = await fetch(`${process.env.API_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return await response.json();
  }
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
