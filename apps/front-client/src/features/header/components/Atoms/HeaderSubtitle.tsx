import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Subtitle = styled(Typography)`
  color: ${palette.gray[500]};
  ${typography.xs.regular};
`;

const HeaderSubtitle = ({ children }: PropsWithChildren) => {
  return <Subtitle>{children}</Subtitle>;
};

export default HeaderSubtitle;
