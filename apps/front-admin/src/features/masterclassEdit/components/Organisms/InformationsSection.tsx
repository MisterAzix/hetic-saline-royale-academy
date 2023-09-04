import { Control } from 'react-hook-form/dist/types';
import { IMasterclassForm } from '../../types';
import { Stack } from '@mui/material';
import Subtitle from '../Atoms/Subtitle';
import TitleField from '../Molecules/TitleField';
import DescriptionField from '../Molecules/DescriptionField';

interface InformationsSectionProps {
  control: Control<IMasterclassForm>;
}

const InformationsSection = ({ control }: InformationsSectionProps) => {
  return (
    <Stack spacing={1}>
      <Subtitle>Informations</Subtitle>
      <TitleField control={control} />
      <DescriptionField control={control} />
    </Stack>
  );
};

export default InformationsSection;
