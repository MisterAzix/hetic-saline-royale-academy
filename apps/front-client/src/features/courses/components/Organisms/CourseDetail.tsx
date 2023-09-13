import styled from '@emotion/styled';
import { Card, Text } from '@hetic-saline-royale-academy/kit-ui';
import { CardContent, Divider, Stack } from '@mui/material';
import ChapterList from '../../../chapter/components/Organisms/ChapterList';
import { useGetUserCourse } from '../../hooks';

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

const Course = ({ id }: { id: string }) => {
  const { course, isUserCourseLoading } = useGetUserCourse(id);

  if (isUserCourseLoading || !course) {
    return null;
  }

  // const daysDifference = getRelativeTimeString(course.updated_at || new Date());

  return (
    <Container>
      <CardContainer>
        <LargeImageCard
          orientation="horizontal"
          image="/images/default_cover.png"
        >
          <CardContent>
            <Text preset="text-lg-semibold" color="gray-900">
              {course.title}
            </Text>
            <Text preset="text-xs-regular" color="gray-500">
              {/* {daysDifference} */}
            </Text>
            <Divider sx={{ my: 1 }} />
            <Text preset="text-sm-regular" color="gray-500">
              {course.description}
            </Text>
          </CardContent>
        </LargeImageCard>
      </CardContainer>
      <ChapterList chapters={course.chapters} />
    </Container>
  );
};

export default Course;
