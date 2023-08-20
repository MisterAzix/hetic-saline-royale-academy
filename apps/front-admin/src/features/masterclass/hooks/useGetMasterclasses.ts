import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Masterclass } from '@prisma/client';

const MASTERCLASS_KEY = 'masterclass';

export const fetchMasterclasses = async (
  access_token?: string
): Promise<Masterclass[]> => {
  const url = new URL('/api/masterclass', process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetMasterclasses = () => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [MASTERCLASS_KEY],
    queryFn: () => fetchMasterclasses(access_token),
    refetchOnWindowFocus: false,
  });

  return {
    masterclasses: query.data || [],
    isMasterclassesLoading: query.isLoading,
    ...query,
  };
};
