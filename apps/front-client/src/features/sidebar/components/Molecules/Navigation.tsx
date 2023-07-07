import styled from '@emotion/styled';
import { TextWithIcon, palette } from '@hetic-saline-royale-academy/kit-ui';
import { AutoGraph, School, Search } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { DashboardRoutes, routes } from '../../../../routes';

interface NavigationProps {
  activeRoute: DashboardRoutes;
}

const NavLink = styled(Link)<{ active?: boolean }>`
  padding: 10px 12px;
  border-radius: 8px;

  ${({ active }) => active && `background-color: ${palette.gray[800]};`}

  &:hover {
    background-color: ${palette.gray[700]};
  }

  @media (max-width: 899px) {
    .MuiSvgIcon-root {
      margin: 0 auto;
      width: 24px;
      height: 24px;
    }
    .nav-text,
    p {
      display: none;
    }
  }
`;

const Navigation = ({ activeRoute }: NavigationProps) => {
  return (
    <Stack spacing={0.5}>
      <NavLink href={routes.explore} active={activeRoute === routes.explore}>
        <TextWithIcon icon={<Search />} color={palette.gray[100]}>
          <span className="nav-text">Explorer</span>
        </TextWithIcon>
      </NavLink>
      <NavLink href={routes.courses} active={activeRoute === routes.courses}>
        <TextWithIcon icon={<School />} color={palette.gray[100]}>
          <span className="nav-text">Mes cours</span>
        </TextWithIcon>
      </NavLink>
      <NavLink href={routes.progress} active={activeRoute === routes.progress}>
        <TextWithIcon icon={<AutoGraph />} color={palette.gray[100]}>
          <span className="nav-text">Progression</span>
        </TextWithIcon>
      </NavLink>
    </Stack>
  );
};

export default Navigation;
