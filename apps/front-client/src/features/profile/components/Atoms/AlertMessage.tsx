import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';

const Alert = styled(Typography)`
  color: ${palette.error[500]};
  ${typography.xs.medium};
`;

export default Alert;
