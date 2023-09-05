import { Course } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const COURSE_KEY = 'course';

export const fetchUserCourses = async (
  user_id: string | undefined,
  access_token?: string
): Promise<Course[]> => {
  const url = new URL(`/api/course/subscribe/${user_id}`, process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetUserCourses = () => {
  const { data } = useSession();

  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [COURSE_KEY],
    queryFn: () => fetchUserCourses(data?.user?.sub, access_token),
    refetchOnWindowFocus: false,
  });

  return {
    courses: query.data || [],
    isUserCoursesLoading: query.isLoading,
    ...query,
  };
};
