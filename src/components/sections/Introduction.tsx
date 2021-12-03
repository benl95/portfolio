import React from 'react';
import { AboutMe } from '@/types/content';
import Section from '@/components/Section';
import Link from '@/components/Link';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';

const Introduction = ({ title, name, occupation }: AboutMe) => {
    return (
        <Section title={title} contrast="low" size="xl">
            <Paragraph text={name} size="xxl" contrast="high" />
            <Paragraph text={occupation} size="xxl" />
            {/* TODO: pass src, url and text as prop */}
            <ul>
                <li>
                    <Image
                        src="/github-icon.svg"
                        alt="Github icon"
                        width={30}
                        height={30}
                    />
                </li>
                <li>
                    <Image
                        src={'/linkedin-icon.svg'}
                        alt="LinkedIn icon"
                        width={30}
                        height={30}
                    />
                </li>
                <li>
                    <Link
                        url={'mailto:ben.langenberg987@gmail.com'}
                        text="hello@ben.com"
                        underline={true}
                    />
                </li>
            </ul>
        </Section>
    );
};

export default Introduction;
