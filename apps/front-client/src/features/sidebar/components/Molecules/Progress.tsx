import styled from '@emotion/styled';
import { palette, ProgressCircular } from '@hetic-saline-royale-academy/kit-ui';
import { Box, Stack } from '@mui/material';
import TitleText from '../Atoms/TitleText';
import DescriptionText from '../Atoms/DescriptionText';
import Link from 'next/link';
import { routes } from '../../../../routes';

const StatsContainer = styled(Stack)`
  padding: 10px;
  border-radius: 8px;
  background-color: ${palette.gray[700]};
  min-height: 150px;
  justify-content: space-between;
  align-items: flex-start;

  &:hover {
    background-color: ${palette.gray[600]};
  }

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
  return (
    <Link href={routes.progress}>
      <StatsContainer>
        <ProgressCircular />
        <DescriptionProgress>
          <TitleText>Mes points</TitleText>
          <DescriptionText>
            Regardez des masterclass et gagnez des points !
          </DescriptionText>
        </DescriptionProgress>
      </StatsContainer>
    </Link>
  );
};

export default Progress;
