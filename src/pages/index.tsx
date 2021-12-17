import type { NextPage, GetStaticProps } from 'next';
import content from '../content/content.json';
import { Sections, Content } from '@/types/content';

import HomeContent from '@/templates/Home';

const Home: NextPage<Content> = ({ sections }) => {
    return <HomeContent {...sections} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const sections: Sections = content;

    if (!sections || undefined) {
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
