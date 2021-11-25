import type { NextPage, GetStaticProps } from 'next';
import { Sections, Content } from '@/types/content';
import HomeContent from '../components/templates/Home';

const Home: NextPage<Content> = ({ sections }) => {
    return <HomeContent {...sections} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const content = await fetch('http://localhost:3000//api/content');
    const sections: Sections = await content.json();

    if (!sections) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            sections,
        },
    };
};

export default Home;
