
import { Stack, Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

interface TextWithIconProps extends PropsWithChildren {
  icon: ReactNode;
}

const TextWithIcon = ({
  children,
  ...props
}: TextWithIconProps) => (
  <Stack direction={"row"} spacing={1}>
    {props.icon}
    <Typography>{children}</Typography>
  </Stack>
);

export default TextWithIcon;
