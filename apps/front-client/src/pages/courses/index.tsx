import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';

function Courses() {
  return <h1>Mes cours</h1>;
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
