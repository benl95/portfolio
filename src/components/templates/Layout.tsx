import React, { Component } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
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
            <MobileNav />
            {/* <Nav /> */}
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
