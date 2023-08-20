import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { UploadMasterclassResponse } from '../types';
import { ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';
import { routes } from '../../../routes';

const fetchMasterclass = async (
  event: ChangeEvent<HTMLInputElement>,
  access_token?: string
) => {
  const file = event.target.files?.[0];
  if (!file) {
    throw new Error('No file');
  }

  const formData = new FormData();
  formData.append('video', file);

  const url = new URL('/api/masterclass/upload', process.env.API_URL);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error('Error uploading video');
  }

  return response.json();
};

export const useUploadMasterclass = () => {
  const router = useRouter();
  const { data } = useSession();
  const access_token = data?.access_token;

  const { mutate, isLoading, isError } = useMutation(
    (event: ChangeEvent<HTMLInputElement>) =>
      fetchMasterclass(event, access_token),
    {
      onSuccess: async ({ id }: UploadMasterclassResponse) => {
        await router.push(
          { pathname: `${routes.masterclass}/${id}` },
          undefined,
          {
            shallow: true,
          }
        );
      },
    }
  );

  return { uploadMasterclass: mutate, isLoading, isError };
};
