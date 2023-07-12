import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import styled from '@emotion/styled';
import { CardContent, Stack } from '@mui/material';
import { Card } from '@hetic-saline-royale-academy/kit-ui';

const CardContainer = styled(Stack)`
  gap: 1rem;
  padding: 40px 20px;
  flex-direction: row;
`;

function Explore() {
  return (
    <CardContainer>
      <Card image="/images/default_cover.png">
        <CardContent>Cours 1 : Le violon</CardContent>
      </Card>
      <Card image="/images/default_cover.png">
        <CardContent>Cours 2 : Le violoncelle</CardContent>
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
