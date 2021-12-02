import type { AppProps } from 'next/app';
import { GlobalStyle } from 'components/styles/Globals.styles';
import { theme } from 'components/styles/Theme.styles';
import Layout from '@/templates/Layout';
import Theme from '@/components/Theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Theme>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Theme>
    );
}

export default MyApp;
