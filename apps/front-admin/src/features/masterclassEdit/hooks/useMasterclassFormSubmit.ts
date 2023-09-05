import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { IMasterclassForm } from '../types';
import { MASTERCLASS_KEY } from './useGetMasterclass';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';
import { useState } from 'react';
import { Status } from '@prisma/client';

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

export const useMasterclassFormSubmit = () => {
  const router = useRouter();
  const { data } = useSession();
  const access_token = data?.access_token;

  const [isPublishedTrigger, setIsPublishedTrigger] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    (data: IMasterclassForm) => {
      setIsPublishedTrigger(false);
      if (data.status === Status.PUBLISHED) {
        setIsPublishedTrigger(true);
      }
      return fetchMasterclass(data, access_token);
    },
    {
      onSuccess: async (data: IMasterclassForm) => {
        await queryClient.invalidateQueries({
          queryKey: [MASTERCLASS_KEY, data.id],
        });
        if (isPublishedTrigger) {
          await router.push(routes.masterclass);
        }
      },
    }
  );

  return { updateMasterclass: mutate, isLoading, isError };
};
