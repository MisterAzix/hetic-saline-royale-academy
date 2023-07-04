import styled from '@emotion/styled';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { Typography } from '@mui/material';

interface TitleProps {
  children: React.ReactNode;
}

const Title = styled(Typography)`
  color: ${palette.gray[900]};
  ${typography.md.semiBold};
`;

const HeaderTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export default HeaderTitle;
