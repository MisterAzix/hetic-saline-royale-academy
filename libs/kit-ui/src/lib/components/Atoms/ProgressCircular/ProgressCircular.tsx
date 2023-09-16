import {
  Box,
  CircularProgress,
  circularProgressClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { palette } from '../../../palette';
import Text from '../Text';
import { ComponentProps } from 'react';

const _ProgressCircular = ({
  progress,
}: ComponentProps<typeof Box> & {
  progress?: string;
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  if (!progress) progress = '0';

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={parseInt(progress)}
        sx={{
          color: palette.gray[100],
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={matches ? 40 : 60}
        thickness={5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          preset={matches ? 'text-xs-regular' : 'text-sm-medium'}
          color="gray-25"
        >
          {matches ? progress : `${progress}%`}
        </Text>
      </Box>
    </Box>
  );
};

export default _ProgressCircular;
