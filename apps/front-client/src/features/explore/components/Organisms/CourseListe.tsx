import { Text } from '@hetic-saline-royale-academy/kit-ui';
import { CardActions, Divider } from '@mui/material';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { routes } from '../../../../routes';
import { useGetAllCourses } from '../../hooks';
import { useUpdateCourse } from '../../hooks/useUpdateCourse';
import CardContainer from '../Atoms/CardContainer';
import CardTitle from '../Atoms/CardTitle';
import ContentWithMargin from '../Atoms/ContentWithMargin';
import StyledCard from '../Atoms/StyledCard';
import SubscribeButton from '../Atoms/SubscribeButton';

const CourseListe = () => {
  const router: NextRouter = useRouter();

  const { courses, isAllCoursesLoading } = useGetAllCourses();

  const { uploadCourse, isLoading } = useUpdateCourse();

  const handleCardClick = async (id: string) => {
    await router.push(`${routes.courses}/${id}`);
  };

  const handleOnSubscribeClick = async (id: string) => {
    try {
      await uploadCourse(id);
    } catch (error) {
      console.log('error', error);
    }
  };

  if (isAllCoursesLoading || !courses.length) {
    return null;
  }

  return (
    <CardContainer>
      {courses?.map((course, index) => {
        return (
          <StyledCard key={index}>
            <Image
              src="/images/default_cover.png"
              alt={course.title}
              width={300}
              height={300}
            />
            <ContentWithMargin onClick={() => handleCardClick(course.id)}>
              <CardTitle variant="h6" color="textPrimary">
                {course.title}
              </CardTitle>
              <Text preset="text-xs-regular" color="gray-500">
                Il y a 2 jours
              </Text>
              <Divider sx={{ my: 1 }} />
              <Text preset="text-sm-regular" color="gray-500">
                {course.description}
              </Text>
            </ContentWithMargin>
            <CardActions>
              <SubscribeButton
                onClick={() => handleOnSubscribeClick(course.id)}
                disabled={isLoading || !!course.user_id}
                hasUserId={!!course.user_id}
              >
                {course.user_id ? 'Subscribed' : 'Subscribe'}
              </SubscribeButton>
            </CardActions>
          </StyledCard>
        );
      })}
    </CardContainer>
  );
};

export default CourseListe;
