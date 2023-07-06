import { ReactElement } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';

function Profile() {
  return <h1>Profil</h1>;
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon profil"
      subtitle="Modifier mon profil"
      activeRoute={routes.profile}
    >
      {page}
    </DashboardLayout>
  );
};

export default Profile;
