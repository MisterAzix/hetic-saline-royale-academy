import styled from '@emotion/styled';
import {
  Box,
  Typography,
  Stack,
  Divider,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui';
import { TextWithIcon } from '@hetic-saline-royale-academy/kit-ui';
import { Search, AutoGraph, School } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const SidebarContainer = styled(Stack)`
  background-color: ${palette.gray[900]};
  min-height: 100vh;
  padding: 10px;
  justify-content: space-between;
`;

const HeaderContainer = styled(Box)`
  background-color: ${palette.gray[100]};
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
`;

const HeaderTitle = styled(Typography)`
  color: ${palette.gray[900]};
  ${typography.md.semiBold};
`;

const HeaderSubtitle = styled(Typography)`
  color: ${palette.gray[500]};
  ${typography.xs.regular};
`;

const NavLink = styled(Link)`
  padding: 10px 12px;
  border-radius: 8px;
  &:hover {
    background-color: ${palette.gray[800]};
  }
`;

const ProfileContainer = styled(Stack)`
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[800]};
  }
`;

const TitleText = styled(Typography)`
  color: ${palette.gray[100]};
  ${typography.sm.semiBold};
`;

const DescriptionText = styled(Typography)`
  color: ${palette.gray[100]};
  ${typography.xs.regular};
`;

const StatsContainer = styled(Stack)`
  padding: 10px;
  border-radius: 8px;
  background-color: ${palette.gray[700]};
  min-height: 150px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Logo = styled(Image)`
  padding: 0 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Stack spacing={3}>
        <Logo
          src="/assets/svg/sra_logo.svg"
          width={173}
          height={53}
          alt="Saline Royale Academy Logo"
        />
        <Stack spacing={0.5}>
          <NavLink href="/explore">
            <TextWithIcon icon={<Search />} color={palette.gray[100]}>
              Explorer
            </TextWithIcon>
          </NavLink>
          <NavLink href="/classes">
            <TextWithIcon icon={<School />} color={palette.gray[100]}>
              Mes cours
            </TextWithIcon>
          </NavLink>
          <NavLink href="/stats">
            <TextWithIcon icon={<AutoGraph />} color={palette.gray[100]}>
              Progression
            </TextWithIcon>
          </NavLink>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <StatsContainer>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant="determinate"
              value={63}
              sx={{
                color: palette.gray[100],
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              size={50}
              thickness={5}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography color={palette.gray[100]} sx={{ fontSize: '12px' }}>
                920
              </Typography>
            </Box>
          </Box>
          <TitleText>Mes points</TitleText>
          <DescriptionText color={palette.gray[100]} sx={{ fontSize: '12px' }}>
            Regarder des masterclass et gagner des points !
          </DescriptionText>
        </StatsContainer>
        <Divider
          variant="middle"
          sx={{ backgroundColor: palette.gray[700], borderRadius: '4px' }}
        />
        <ProfileContainer>
          <Box
            sx={{
              borderRadius: '50%',
              backgroundColor: palette.gray[100],
              width: '40px',
              height: '40px',
            }}
          />
          <Stack>
            <TitleText>John Doe</TitleText>
            <DescriptionText>john.doe@example.fr</DescriptionText>
          </Stack>
        </ProfileContainer>
      </Stack>
    </SidebarContainer>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Profil</HeaderTitle>
      <HeaderSubtitle>Modifier mes informations personnelles</HeaderSubtitle>
    </HeaderContainer>
  );
};

const DashboardLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="250px 1fr"
      sx={{ height: '100vh' }}
    >
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Header />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
