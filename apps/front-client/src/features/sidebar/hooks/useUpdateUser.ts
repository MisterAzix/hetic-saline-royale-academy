import { useMutation } from '@tanstack/react-query';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

export interface UpdateUserDto {
  first_name: string;
  last_name: string;
  email: string;
}

const updateUser = async (
  id: string,
  updateUserDto: UpdateUserDto,
  access_token?: string
): Promise<User> => {
  const response = await fetch(`${process.env.API_URL}/user/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify(updateUserDto),
  });

  if (!response.ok) {
    throw new Error('Error updating user');
  }

  return response.json();
};

export const useUpdateUser = () => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const mutation = useMutation(
    ({ id, data }: { id: string; data: UpdateUserDto }) =>
      updateUser(id, data, access_token)
  );

  return mutation;
};
