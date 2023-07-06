import { useMutation } from '@tanstack/react-query';
import { ILoginForm, ILoginResponse } from '../types';
import * as process from 'process';
import { useRouter } from 'next/router';

const fetchLoginFormSubmit = async (data: ILoginForm) => {
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return await response.json();
  }
};

export const useLoginFormSubmit = () => {
  const router = useRouter();

  const { mutate, isLoading, isError } = useMutation(fetchLoginFormSubmit, {
    onSuccess: async (data: ILoginResponse) => {
      localStorage.setItem('access_token', data.access_token);
      await router.push('/');
    },
  });

  return { submitLoginForm: mutate, isLoading, isError };
};
