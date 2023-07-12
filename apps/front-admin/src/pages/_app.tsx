import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import * as process from 'process';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function AdminApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log('API_URL', process.env.API_URL);
  console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <Head>
        <title>Saline Royale Academy | Admin</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <main className="app">{getLayout(<Component {...pageProps} />)}</main>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default AdminApp;
