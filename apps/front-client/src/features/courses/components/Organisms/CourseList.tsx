import styled from '@emotion/styled';
import { Card, Text } from '@hetic-saline-royale-academy/kit-ui';
import { CardContent, Divider, Stack } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import { routes } from '../../../../routes';
import { useGetUserCourses } from '../../hooks';
import { getRelativeTimeString } from '../../utils';

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 40px 20px;
`;

const CourseList = () => {
  const router: NextRouter = useRouter();
  const { courses, isUserCoursesLoading } = useGetUserCourses();

  const handleCardClick = async (id: string) => {
    await router.push(`${routes.courses}/${id}`);
  };

  if (isUserCoursesLoading || !courses.length) {
    return null;
  }

  return (
    <>
      {courses?.map((course, index) => {
        const daysDifference = getRelativeTimeString(
          course.updated_at || new Date()
        );

        return (
          <CardContainer key={index} onClick={() => handleCardClick(course.id)}>
            <Card orientation="horizontal" image="/images/default_cover.png">
              <CardContent>
                <Text preset="text-lg-semibold" color="gray-900">
                  {course.title}
                </Text>
                <Text preset="text-xs-regular" color="gray-500">
                  {daysDifference}
                </Text>
                <Divider sx={{ my: 1 }} />
                <Text preset="text-sm-regular" color="gray-500">
                  {course.description}
                </Text>
              </CardContent>
            </Card>
          </CardContainer>
        );
      })}
    </>
  );
};

export default CourseList;
