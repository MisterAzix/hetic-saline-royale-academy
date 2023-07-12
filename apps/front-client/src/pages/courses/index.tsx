import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { Card, Text } from '@hetic-saline-royale-academy/kit-ui';
import { CardContent, Divider, Stack } from '@mui/material';
import styled from '@emotion/styled';

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 40px 20px;
`;

function Courses() {
  return (
    <CardContainer>
      <Card orientation="horizontal" image="/images/default_cover.png">
        <CardContent>
          <Text preset="text-lg-semibold" color="gray-900">
            Cours 1 : Le violon
          </Text>
          <Text preset="text-xs-regular" color="gray-500">
            Il y a 2 jours
          </Text>
          <Divider sx={{ my: 1 }} />
          <Text preset="text-sm-regular" color="gray-500">
            Description du cours : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae, id deleniti. Hic, beatae blanditiis
            aspernatur mollitia autem ea voluptas nostrum enim a quia obcaecati
            ipsam.
          </Text>
        </CardContent>
      </Card>
      <Card orientation="horizontal" image="/images/default_cover.png">
        <CardContent>
          <Text preset="text-lg-semibold" color="gray-900">
            Cours 2 : Le violoncelle
          </Text>
          <Text preset="text-xs-regular" color="gray-500">
            Il y a 1 semaine
          </Text>
          <Divider sx={{ my: 1 }} />
          <Text preset="text-sm-regular" color="gray-500">
            Description du cours : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae, id deleniti. Hic, beatae blanditiis
            aspernatur mollitia autem ea voluptas nostrum enim a quia obcaecati
            ipsam.
          </Text>
        </CardContent>
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
