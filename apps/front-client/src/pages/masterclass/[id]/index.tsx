import styled from '@emotion/styled';
import {
  COLORS,
  SPACING,
  Text,
  VideoPlayer,
  getTheme,
} from '@hetic-saline-royale-academy/kit-ui';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useGetMasterclass } from '../../../features/masterclass/hooks/useGetMasterclass';
import DashboardLayout from '../../../layout/DashboardLayout';
import { routes } from '../../../routes';
import { authOptions } from '../../api/auth/[...nextauth]';

const Separation = styled.div`
  height: 2px;
  background: ${getTheme(COLORS, 'gray-100')};
  margin-top: ${getTheme(SPACING, '32')};
`;

const MasterClassDetail = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const { masterclass, isMasterclassLoading } = useGetMasterclass(id as string);

  if (isMasterclassLoading || !masterclass) {
    return null;
  }
  console.log({ title: masterclass.title });
  return (
    <div>
      <VideoPlayer title={masterclass.title} url={masterclass.video_url} />
      <Separation />
      <Text
        css={`
          margin-top: ${getTheme(SPACING, '32')};
        `}
        preset="text-md-bold"
        color="gray-500"
        tag="h2"
      >
        Description :
      </Text>
      <Text
        css={`
          margin-top: ${getTheme(SPACING, '32')};
          max-width: 488px;
        `}
        preset="text-md-regular"
        color="gray-500"
        tag="p"
      >
        ${masterclass.description}
      </Text>
    </div>
  );
};
MasterClassDetail.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout
      title="Mon masterclass"
      subtitle="Les détails de mon masterclass"
      activeRoute={routes.masterclass}
    >
      {page}
    </DashboardLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: routes.login } };
  }

  return { props: { session } };
};

export default MasterClassDetail;
