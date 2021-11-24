import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Navigation } from '../types/navigation';
import Nav from '../components/common/Nav';
import Head from 'next/head';

const Home: NextPage<Navigation> = ({ links }) => {
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
        const res = await fetch('http://localhost:3000//api/navigation');
        const { links }: Navigation = await res.json();

        if (!links) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                links,
            },
        };
    } catch (err) {
        throw err;
    }
};

export default Home;
