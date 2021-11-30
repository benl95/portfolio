import React, { Component } from 'react';
import styles from '../../../styles/Layout.module.scss';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Children } from '@/types/content';

const Layout = ({ children }: Children) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ben Langenberg</title>
                <meta
                    name="description"
                    content="I'm a developer who is specialized in designing and building accessible web applications."
                />
            </Head>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
