import { ProgressCard } from '@hetic-saline-royale-academy/kit-ui';
import { Stack, styled } from '@mui/material';
import { useSession } from 'next-auth/react';
import IMasterclassTracker from '../../types/IMasterclassTracker';

interface ProgressProps {
  data: IMasterclassTracker[];
}

const CardContainer = styled(Stack)`
  gap: 1rem;
  flex-direction: row;
`;

function ProgressCardContainer({ data }: ProgressProps) {
  const session = useSession();
  const user = session?.data?.user;

  const totalMasterclasses = data.length || 0;
  const completedMasterclasses =
    data.filter((masterclass) => masterclass.progression === 100).length || 0;
  const masterclassesCompletedPercent =
    Math.round((completedMasterclasses / totalMasterclasses) * 100) || 0;

  if (!user) return null;

  return (
    <CardContainer>
      <ProgressCard
        title={completedMasterclasses.toString()}
        subtitle="Nombre de masterclasses complétées"
      />
      <ProgressCard
        title={totalMasterclasses.toString()}
        subtitle="Nombre de masterclasses souscrites"
      />
      <ProgressCard
        title={masterclassesCompletedPercent.toString() + '%'}
        subtitle="Pourcentage de masterclasses complétées parmi celles souscrites"
      />
    </CardContainer>
  );
}

export default ProgressCardContainer;
