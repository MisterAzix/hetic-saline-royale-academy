import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  circularProgressClasses,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import TitleText from '../Atoms/TitleText';
import DescriptionText from '../Atoms/DescriptionText';

const StatsContainer = styled(Stack)`
  padding: 10px;
  border-radius: 8px;
  background-color: ${palette.gray[700]};
  min-height: 150px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 899px) {
    min-height: auto;
  }
`;

const DescriptionProgress = styled(Box)`
  @media (max-width: 899px) {
    display: none;
  }
`;

const Progress = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StatsContainer>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={63}
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
          <Typography color={palette.gray[100]} sx={{ fontSize: '12px' }}>
            920
          </Typography>
        </Box>
      </Box>
      <DescriptionProgress>
        <TitleText>Mes points</TitleText>
        <DescriptionText>
          Regarder des masterclass et gagner des points !
        </DescriptionText>
      </DescriptionProgress>
    </StatsContainer>
  );
};

export default Progress;
