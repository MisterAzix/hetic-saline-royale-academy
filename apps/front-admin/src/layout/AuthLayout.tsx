import { PropsWithChildren } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { palette } from '@hetic-saline-royale-academy/kit-ui';

const AuthLayout = ({
  children,
  coverURL,
}: PropsWithChildren & { coverURL: string }) => {
  return (
    <Grid
      container
      height={'100vh'}
      sx={{
        backgroundColor: palette.gray[50],
      }}
    >
      <Grid item md={6} xs={12}>
        <Box
          alignItems={'center'}
          display={'flex'}
          height={'100vh'}
          justifyContent={'center'}
          padding={3}
        >
          {children}
        </Box>
      </Grid>
      <Grid item md={6} xs={0}>
        <Box
          display={{ xs: 'none', md: 'block' }}
          position={'relative'}
          height={'100vh'}
        >
          <Image
            fill
            priority={true}
            sizes={'(max-width: 900px) 0, 70vw'}
            alt={''}
            src={coverURL}
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
