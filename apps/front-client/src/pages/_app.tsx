import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from '@emotion/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { muiTheme } from '@hetic-saline-royale-academy/kit-ui';
import { SessionProvider } from 'next-auth/react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function ClientApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Saline Royale Academy</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={muiTheme}>
              <main className="app">
                {getLayout(<Component {...pageProps} />)}
              </main>
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default ClientApp;
