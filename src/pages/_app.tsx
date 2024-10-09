import type { AppProps } from 'next/app';
import { Theme } from '@/app/providers/theme';
import Header from '@/widgets/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Header />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
