import { Course } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const COURSE_KEY = 'courses';

export const fetchAllCourses = async (
  access_token?: string
): Promise<Course[]> => {
  const url = new URL(`/api/course`, process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetAllCourses = () => {
  const { data } = useSession();

  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [COURSE_KEY],
    queryFn: () => fetchAllCourses(access_token),
    refetchOnWindowFocus: false,
  });

  return {
    courses: query.data || [],
    isAllCoursesLoading: query.isLoading,
    ...query,
  };
};
