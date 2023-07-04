import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';

interface TextProps {
  children: React.ReactNode;
}

const Text = styled(Typography)`
  color: ${palette.gray[100]};
  ${typography.sm.semiBold};
`;

const TitleText = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default TitleText;
