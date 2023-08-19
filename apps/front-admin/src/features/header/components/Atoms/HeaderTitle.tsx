import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Title = styled(Typography)`
  color: ${palette.gray[900]};
  ${typography.md.semiBold};
`;

const HeaderTitle = ({ children }: PropsWithChildren) => {
  return <Title>{children}</Title>;
};

export default HeaderTitle;
