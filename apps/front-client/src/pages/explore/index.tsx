import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import styled from '@emotion/styled';
import { CardContent, Divider, Stack } from '@mui/material';
import { Card, Text } from '@hetic-saline-royale-academy/kit-ui';

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 40px 20px;
  flex-direction: row;
`;

function Explore() {
  return (
    <CardContainer>
      <Card image="/images/default_cover.png">
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
      <Card image="/images/default_cover.png">
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

Explore.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Explorer"
      subtitle="Rechercher les cours disponibles"
      activeRoute={routes.explore}
    >
      {page}
    </DashboardLayout>
  );
};

export default Explore;
