import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { IMasterclassForm } from '../types';
import { MASTERCLASS_KEY } from './useGetMasterclass';

const fetchMasterclass = async (
  data: IMasterclassForm,
  access_token?: string
) => {
  const url = new URL(`/api/masterclass/${data.id}`, process.env.API_URL);
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error updating masterclass');
  }

  return response.json();
};

export const useUpdateMasterclass = () => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    (data: IMasterclassForm) => fetchMasterclass(data, access_token),
    {
      onSuccess: async (data: IMasterclassForm) => {
        await queryClient.invalidateQueries({
          queryKey: [MASTERCLASS_KEY, data.id],
        });
      },
    }
  );

  return { updateMasterclass: mutate, isLoading, isError };
};
