import { DashboardLayout } from '@layouts';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  if (pathname === '/login') {
    return <Component {...pageProps} />;
  }

  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
};

export default App;
