import styled from '@emotion/styled';
import { Box, Typography, Stack } from '@mui/material';
import { palette, typography } from '@hetic-saline-royale-academy/kit-ui'

const SidebarContainer = styled(Box)`
    background-color: ${palette.gray[900]};
    min-height: 100vh;
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

const NavLink = styled(Typography)`
    color: ${palette.gray[100]};
    ${typography.xs.regular};
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Stack>
                <NavLink>Explorer</NavLink>
                <NavLink>Mes cours</NavLink>
                <NavLink>Progression</NavLink>
            </Stack>
        </SidebarContainer>
    );
}

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Profil</HeaderTitle>
            <HeaderSubtitle>Modifier mes informations personnelles</HeaderSubtitle>
        </HeaderContainer>
    );
}

const DashboardLayout = () => {
    return (
        <Box display="grid" gridTemplateColumns="250px 1fr" sx={{ height: '100vh' }}>
            <Box>
                <Sidebar />
            </Box>
            <Box>
                <Header />
            </Box>
        </Box>
    );
}

export default DashboardLayout;