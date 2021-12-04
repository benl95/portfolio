import React from 'react';
import Footer from '@/components/footer/Footer';
import MobileNav from '@/components/nav/MobileNav';
import Head from 'next/head';
import { Children } from '@/types/elements';

const Layout = ({ children }: Children) => {
    return (
        <div>
            <Head>
                <title>Ben Langenberg</title>
                <meta
                    name="description"
                    content="I'm a developer who is specialized in designing and building accessible web applications."
                />
            </Head>
            <MobileNav text="langenberg" />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
