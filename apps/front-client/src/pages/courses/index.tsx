import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { Card } from '@hetic-saline-royale-academy/kit-ui';
import { CardContent, Stack } from '@mui/material';
import styled from '@emotion/styled';

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 40px 20px;
`;

function Courses() {
  return (
    <CardContainer>
      <Card orientation="horizontal" image="/images/default_cover.png">
        <CardContent>Cours 1 : Le violon</CardContent>
      </Card>
      <Card orientation="horizontal" image="/images/default_cover.png">
        <CardContent>Cours 2 : Le violoncelle</CardContent>
      </Card>
    </CardContainer>
  );
}

Courses.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mes cours"
      subtitle="Rechercher parmi vos cours"
      activeRoute={routes.courses}
    >
      {page}
    </DashboardLayout>
  );
};

export default Courses;
