import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Alert = styled(Typography)`
  color: ${palette.error[500]};
  ${typography.xs.medium};
`;

const AlertMessage = ({ children }: PropsWithChildren) => {
  return <Alert>{children}</Alert>;
};

export default AlertMessage;
