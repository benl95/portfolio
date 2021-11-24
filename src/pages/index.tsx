import type { NextPage, GetStaticProps } from 'next';
import { Navigation } from '../types/navigation';
import { Content, Sections } from '../types/content';
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
        const [navigation, content] = await Promise.all([
            fetch('http://localhost:3000//api/navigation'),
            fetch('http://localhost:3000//api/content'),
        ]);
        const [{ links }, sections]: [links: Navigation, sections: Sections] =
            await Promise.all([navigation.json(), content.json()]);

        if (!links || !sections) {
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
