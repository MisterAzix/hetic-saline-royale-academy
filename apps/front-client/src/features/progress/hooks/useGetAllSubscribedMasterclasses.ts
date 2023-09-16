import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import IMasterclassTracker from '../types/IMasterclassTracker';

const getAllSubscribedMasterclasses = async (
  userId: string,
  access_token?: string
): Promise<IMasterclassTracker[]> => {
  const response = await fetch(
    `${process.env.API_URL}/api/masterclass-tracker/user-id/${userId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Error getting masterclassTracker');
  }

  return response.json();
};

export const useGetAllSubscribedMasterclasses = (userId: string) => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const TRACKER_ID = 'masterclassTracker';
  const query = useQuery({
    queryKey: [TRACKER_ID],
    queryFn: () => getAllSubscribedMasterclasses(userId, access_token),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });

  return {
    masterclassTracker: query.data || [],
  };
};
