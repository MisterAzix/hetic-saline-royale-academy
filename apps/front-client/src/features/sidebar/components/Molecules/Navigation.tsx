import styled from '@emotion/styled';
import { TextWithIcon, palette } from '@hetic-saline-royale-academy/kit-ui';
import { AutoGraph, School, Search } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Link from 'next/link';

const NavLink = styled(Link)`
  padding: 10px 12px;
  border-radius: 8px;
  &:hover {
    background-color: ${palette.gray[800]};
  }
`;

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
