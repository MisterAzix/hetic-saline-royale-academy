import styled from '@emotion/styled';
import { TextWithIcon, palette } from '@hetic-saline-royale-academy/kit-ui';
import { AutoGraph, School, Search } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { routes } from '../../../../routes';

interface NavigationProps {
  activeRoute: (typeof routes)[keyof typeof routes];
}

const NavLink = styled(Link)<{ active?: boolean }>`
  padding: 10px 12px;
  border-radius: 8px;

  ${({ active }) => active && `background-color: ${palette.gray[800]};`}

  &:hover {
    background-color: ${palette.gray[700]};
  }
`;

const Navigation = ({ activeRoute }: NavigationProps) => {
  return (
    <Stack spacing={0.5}>
      <NavLink href={routes.explore} active={activeRoute === routes.explore}>
        <TextWithIcon icon={<Search />} color={palette.gray[100]}>
          Explorer
        </TextWithIcon>
      </NavLink>
      <NavLink href={routes.courses} active={activeRoute === routes.courses}>
        <TextWithIcon icon={<School />} color={palette.gray[100]}>
          Mes cours
        </TextWithIcon>
      </NavLink>
      <NavLink href={routes.progress} active={activeRoute === routes.progress}>
        <TextWithIcon icon={<AutoGraph />} color={palette.gray[100]}>
          Progression
        </TextWithIcon>
      </NavLink>
    </Stack>
  );
};

export default Navigation;
