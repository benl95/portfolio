import type { NextPage, GetStaticProps } from 'next';
import { Navigation } from '../types/navigation';
import { Content, Sections } from '../types/sections';
import Nav from '../components/common/Nav';
import Head from 'next/head';
import React from 'react';

const Home: NextPage<Content> = ({ links, sections }) => {
    console.log(links, sections);
    return (
        <div>
            <Head>
                <title>Ben Langenberg</title>
                <meta
                    name="description"
                    content="Ben Langenberg is a developer who is specialized in designing and building accessible web applications."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav links={links} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const navigation = await fetch('http://localhost:3000//api/navigation');
        const content = await fetch('http://localhost:3000//api/content');
        const { links }: Navigation = await navigation.json();
        const sections: Sections = await content.json();

        if (!links) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                links,
                sections,
            },
        };
    } catch (err) {
        throw err;
    }
};

export default Home;
