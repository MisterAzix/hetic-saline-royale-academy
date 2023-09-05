import styled from '@emotion/styled';
import { Card, Text } from '@hetic-saline-royale-academy/kit-ui';
import { CardContent, Divider, Stack } from '@mui/material';
import ChapterList from '../../../chapiter/Organisms/ChapterList';
import { useGetUserCourse } from '../../hooks/useGetUserCourse';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
`;

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 50px 20px;
  flex: 1;
`;

const LargeImageCard = styled(Card)`
  img {
    width: 40%;
    height: auto;
  }
`;

interface CourseI {
  id: string;
}

const Course = ({ id }: CourseI) => {
  const { course, isUserCourseLoading } = useGetUserCourse(id);

  if (isUserCourseLoading || !course) {
    return null;
  }
  return (
    <Container>
      <CardContainer>
        <LargeImageCard
          orientation="horizontal"
          image="/images/default_cover.png"
        >
          <CardContent>
            <Text preset="text-lg-semibold" color="gray-900">
              {course?.title}
            </Text>
            <Text preset="text-xs-regular" color="gray-500">
              Il y a 2 jours
            </Text>
            <Divider sx={{ my: 1 }} />
            <Text preset="text-sm-regular" color="gray-500">
              {course?.description}
            </Text>
          </CardContent>
        </LargeImageCard>
      </CardContainer>
      <ChapterList chapiters={course?.chapters} />
    </Container>
  );
};

export default Course;
