import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';

interface TextProps {
  children: React.ReactNode;
}

const Text = styled(Typography)`
  color: ${palette.gray[100]};
  ${typography.xs.regular};
`;

const DescriptionText = ({ children }: TextProps) => {
  return (
    <Text color={palette.gray[100]} sx={{ fontSize: '12px' }}>
      {children}
    </Text>
  );
};

export default DescriptionText;
