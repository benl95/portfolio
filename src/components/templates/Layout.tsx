import React, { Component } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Ben Langenberg</title>
                <meta
                    name="description"
                    content="Ben Langenberg is a developer who is specialized in designing and building accessible web applications."
                />
            </Head>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
