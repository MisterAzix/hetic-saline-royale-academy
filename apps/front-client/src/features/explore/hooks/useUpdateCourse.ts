import { Course } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const updateCourse = async (
  id: string | null,
  user_id: string,
  access_token?: string
): Promise<Course> => {
  const url = new URL(`api/course/${id}`, process.env.API_URL);

  const formData = new FormData();
  formData.append('user_id', user_id);

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user_id }),
  });

  if (!response.ok) {
    throw new Error('Error uploading course');
  }

  return response.json();
};

export const useUpdateCourse = () => {
  const { data } = useSession();

  const userId = data?.user?.sub as string;
  const access_token = data?.access_token;

  const { mutate, isLoading, isError } = useMutation((id: string) =>
    updateCourse(id, userId, access_token)
  );

  return { uploadCourse: mutate, isLoading, isError };
};
