import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Category } from '@prisma/client';

const CATEGORY_KEY = 'category';

export const fetchCategories = async (
  access_token?: string
): Promise<Category[]> => {
  const url = new URL('/api/categories', process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetCategories = () => {
  const { data } = useSession();
  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: () => fetchCategories(access_token),
    refetchOnWindowFocus: false,
  });

  return {
    categories: query.data || [],
    isCategoriesLoading: query.isLoading,
    ...query,
  };
};
