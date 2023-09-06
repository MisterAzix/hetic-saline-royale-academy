import { Control } from 'react-hook-form/dist/types';
import { IMasterclassForm } from '../../types';
import { Stack } from '@mui/material';
import Subtitle from '../Atoms/Subtitle';
import ChapterField from '../Molecules/ChapterTitleField';
import { Button } from '@hetic-saline-royale-academy/kit-ui';
import { useFieldArray } from 'react-hook-form';
import Description from '../Atoms/Description';

interface ChaptersSectionProps {
  control: Control<IMasterclassForm>;
}

const ChaptersSection = ({ control }: ChaptersSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'chapters',
  });

  const addChapter = () => {
    append({
      id: crypto.randomUUID(),
      timecode: fields.length === 0 ? '00:00:00' : '',
      title: '',
    });
  };

  const deleteChapter = (index: number) => {
    remove(index);
  };

  return (
    <Stack spacing={1}>
      <Subtitle>Chapitres</Subtitle>
      <Description>
        Les chapitres peuvent faciliter le visionnage de votre vidéo. Ils vous
        permettent également de construire des cours.
      </Description>
      <Stack spacing={1}>
        {fields.map((chapter, index) => (
          <ChapterField
            key={chapter.id}
            control={control}
            index={index}
            onDelete={() => deleteChapter(index)}
          />
        ))}
        <Stack>
          <Button onClick={addChapter}>Ajouter un chapitre</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChaptersSection;
