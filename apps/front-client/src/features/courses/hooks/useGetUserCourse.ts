import { Chapter } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const COURSE_KEY = 'course';

interface CouseI {
  id?: string;
  title?: string;
  description?: string;
  progress_tracking_id?: string;
  user_id?: string;
  is_deleted?: boolean;
  created_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
  chapters: Chapter[];
}
export const fetchUserCourse = async (
  id: string,
  access_token?: string
): Promise<CouseI> => {
  const url = new URL(`/api/course/${id}`, process.env.API_URL);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const useGetUserCourse = (id: string) => {
  const { data } = useSession();

  const access_token = data?.access_token;

  const query = useQuery({
    queryKey: [COURSE_KEY],
    queryFn: () => fetchUserCourse(id, access_token),
    refetchOnWindowFocus: false,
  });

  return {
    course: query.data || null,
    isUserCourseLoading: query.isLoading,
    ...query,
  };
};
