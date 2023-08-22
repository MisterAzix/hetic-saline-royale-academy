import { ReactElement } from 'react';
import UpdateUserForm from '../../features/profile/components/Organisms/UpdateUserForm';
import DashboardLayout from '../../layout/DashboardLayout';
import { routes } from '../../routes';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';

function Profile() {
  return <UpdateUserForm />;
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon profil"
      subtitle="Modifier mes infos personnelles et mes modes de paiement"
      activeRoute={routes.profile}
    >
      {page}
    </DashboardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: routes.login } };
  }

  return { props: { session } };
}

export default Profile;
