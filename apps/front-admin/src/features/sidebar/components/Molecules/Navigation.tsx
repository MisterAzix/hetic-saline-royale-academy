import styled from '@emotion/styled';
import { TextWithIcon, palette } from '@hetic-saline-royale-academy/kit-ui';
import { Dashboard, School } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { DashboardRoutes, routes } from '../../../../routes';

interface NavigationProps {
  activeRoute: DashboardRoutes;
}

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  active?: boolean;
}

const NavLink = styled(({ active, ...props }: NavLinkProps) => (
  <Link {...props} />
))`
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
      <NavLink
        href={routes.dashboard}
        active={activeRoute === routes.dashboard}
      >
        <TextWithIcon icon={<Dashboard />} color={palette.gray[100]}>
          <span className="nav-text">Dashboard</span>
        </TextWithIcon>
      </NavLink>
      <NavLink
        href={routes.masterclass}
        active={activeRoute === routes.masterclass}
      >
        <TextWithIcon icon={<School />} color={palette.gray[100]}>
          <span className="nav-text">Masterclasses</span>
        </TextWithIcon>
      </NavLink>
    </Stack>
  );
};

export default Navigation;
