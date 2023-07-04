import styled from '@emotion/styled';
import { palette } from '@hetic-saline-royale-academy/kit-ui';
import { Box } from '@mui/material';
import HeaderTitle from '../Atoms/HeaderTitle';
import HeaderSubtitle from '../Atoms/HeaderSubtitle';

const HeaderContainer = styled(Box)`
  background-color: ${palette.gray[100]};
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Mon profil</HeaderTitle>
      <HeaderSubtitle>Modifier mes informations personnelles</HeaderSubtitle>
    </HeaderContainer>
  );
};

export default Header;
