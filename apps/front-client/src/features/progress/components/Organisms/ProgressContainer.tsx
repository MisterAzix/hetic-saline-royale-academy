import { ProgressMasterclass, Text } from '@hetic-saline-royale-academy/kit-ui';
import { Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useGetAllSubscribedMasterclasses } from '../../hooks';
import ProgressCardContainer from '../Molecules/ProgressCardContainer';

function ProgressContainer() {
  const session = useSession();
  const user = session?.data?.user;

  const { masterclassTracker } = useGetAllSubscribedMasterclasses(
    user?.sub as string
  );

  if (!user) return null;

  return (
    <Stack spacing={2}>
      <ProgressCardContainer data={masterclassTracker} />
      <Text preset="text-lg-semibold" color="gray-900">
        Vos masterclasses en cours
      </Text>
      {masterclassTracker.length > 0 ? (
        masterclassTracker.map((masterclass) => (
          <ProgressMasterclass
            key={masterclass.masterclass_id}
            title={masterclass.masterclass.title}
            subtitle={masterclass.masterclass.description || ''}
            progression={masterclass.progression?.toString()}
            image={masterclass.masterclass.cover_url || ''}
          />
        ))
      ) : (
        <Text preset="text-sm-semibold" color="gray-400">
          Vous n&#8217;avez pas encore souscrit à une masterclass :(
        </Text>
      )}
    </Stack>
  );
}

export default ProgressContainer;
