import { Masterclass } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const MASTERCLASS_KEY = 'masterclass';

export const fetchMasterclass = async (
  id: string,
  access_token?: string
): Promise<Masterclass & { chapters: [] }> => {
  const url = new URL(`/api/masterclass/${id}`, process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetMasterclass = (id: string) => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [MASTERCLASS_KEY, id],
    queryFn: () => fetchMasterclass(id, access_token),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return {
    masterclass: query.data || ({} as Masterclass & { chapters: [] }),
    isMasterclassLoading: query.isLoading,
    ...query,
  };
};
