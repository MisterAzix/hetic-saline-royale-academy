import React from 'react';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';
import { InputGroup } from '@hetic-saline-royale-academy/kit-ui';
import { IMasterclassForm } from '../../types';
import { Box, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ChapterFieldProps {
  control: Control<IMasterclassForm>;
  index: number;
  onDelete: () => void;
}

const ChapterField = ({ control, index, onDelete }: ChapterFieldProps) => {
  return (
    <Stack direction={'row'} spacing={1} alignItems={'end'}>
      <Box flex={1}>
        <Controller
          name={`chapters.${index}.timecode`}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState: { errors },
          }) => (
            <InputGroup
              label={index === 0 ? 'Timecode' : ''}
              {...(index > 0 && { onChange })}
              value={value}
              error={!!error}
              type={'time'}
              inputProps={{
                step: 1,
              }}
              disabled={index === 0}
            />
          )}
        />
      </Box>
      <Box flex={3}>
        <Controller
          name={`chapters.${index}.title`}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputGroup
              label={index === 0 ? 'Titre du chapitre' : ''}
              onChange={onChange}
              value={value}
              error={!!error}
            />
          )}
        />
      </Box>
      <IconButton style={{ margin: '8px 0' }} size={'small'} onClick={onDelete}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ChapterField;
