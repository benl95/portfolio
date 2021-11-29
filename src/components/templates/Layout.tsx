import React, { Component } from 'react';
import styles from '../../../styles/Layout.module.scss';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.container}>
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
        </div>
    );
};

export default Layout;
