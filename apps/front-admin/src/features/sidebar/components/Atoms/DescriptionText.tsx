import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const Text = styled(Typography)`
  color: ${palette.gray[100]};
  ${typography.xs.regular};
`;

const DescriptionText = ({ children }: PropsWithChildren) => {
  return <Text>{children}</Text>;
};

export default DescriptionText;
