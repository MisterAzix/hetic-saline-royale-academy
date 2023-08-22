import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { IUpdateUserForm } from '../types';

const updateUser = async (
  id: string,
  updateUserForm: IUpdateUserForm,
  access_token?: string
): Promise<User> => {
  const response = await fetch(`${process.env.API_URL}/user/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUserForm),
  });

  if (!response.ok) {
    throw new Error('Error updating user');
  }

  return response.json();
};

export const useUpdateUser = () => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const { mutate, isLoading, isError } = useMutation(
    ({ id, data }: { id: string; data: IUpdateUserForm }) =>
      updateUser(id, data, access_token)
  );

  return { submitUpdateUserForm: mutate, isLoading, isError };
};
