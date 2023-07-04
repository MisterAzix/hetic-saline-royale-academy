import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = styled(Typography)`
  color: ${palette.gray[500]};
  ${typography.xs.regular};
`;

const HeaderSubtitle = ({ children }: SubtitleProps) => {
  return <Subtitle>{children}</Subtitle>;
};

export default HeaderSubtitle;
