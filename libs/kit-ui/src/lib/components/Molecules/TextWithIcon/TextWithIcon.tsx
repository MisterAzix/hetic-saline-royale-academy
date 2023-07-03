import styled from '@emotion/styled';
import { Stack, Typography, SvgIcon } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { palette } from '../../../palette';
import { typography } from '../../../typography';

interface TextWithIconProps extends PropsWithChildren {
  icon: ReactNode;
  color: string;
}

const StyledTypography = styled(Typography)<{ color: string }>`
  color: ${({ color }) => color || palette.gray[900]};
  ${typography.md.regular};
`;

const TextWithIcon = ({ children, ...props }: TextWithIconProps) => (
  <Stack direction={'row'} spacing={2}>
    <SvgIcon sx={{ color: props.color }}>{props.icon}</SvgIcon>
    <StyledTypography color={props.color}>{children}</StyledTypography>
  </Stack>
);

export default TextWithIcon;
