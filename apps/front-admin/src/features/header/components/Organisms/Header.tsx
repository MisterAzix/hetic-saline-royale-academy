import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Box } from '@mui/material';
import HeaderTitle from '../Atoms/HeaderTitle';
import HeaderSubtitle from '../Atoms/HeaderSubtitle';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const HeaderContainer = styled(Box)`
  background-color: ${palette.gray[100]};
  min-height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
`;

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderContainer>
  );
};

export default Header;
