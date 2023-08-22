import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Title = styled(Typography)`
  color: ${palette.gray[700]};
  ${typography.md.semiBold};
`;

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <Title>{children}</Title>;
};

export default SectionTitle;
