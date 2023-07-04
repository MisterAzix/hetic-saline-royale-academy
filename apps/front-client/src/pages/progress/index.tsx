import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';

function Progress() {
  return <h1>Progress</h1>;
}

Progress.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Ma progression"
      subtitle="Suivre ma progression, mes badges et mes statistiques"
      activeRoute={routes.progress}
    >
      {page}
    </DashboardLayout>
  );
};

export default Progress;
