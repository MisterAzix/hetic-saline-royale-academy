import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';

function Explore() {
  return <h1>Explore</h1>;
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
