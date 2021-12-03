import React from 'react';
import Title from '@/components/Title';
import Link from '@/components/Link';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';
import Container from '@/components/Container';
import { AboutMe } from '@/types/content';
import { IntroSection } from 'components/styles/Section.styles';

const Introduction = ({ title, name, occupation }: AboutMe) => {
    return (
        <IntroSection>
            <Title title={title} size="xl" weight="bold" />
            <Container>
                <Paragraph
                    text={name}
                    size="xxl"
                    contrast="high"
                    weight="black"
                />
                <Paragraph text={occupation} size="xxl" weight="black" />
            </Container>
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
        </IntroSection>
        // <Section title={title} contrast="low" size="xl" weight="bold">
        //     <Container>
        // <Paragraph
        //     text={name}
        //     size="xxl"
        //     contrast="high"
        //     weight="black"
        // />
        // <Paragraph text={occupation} size="xxl" weight="black" />
        //     </Container>
        // {/* TODO: pass src, url and text as prop */}
        // {/* Extract ul list to component */}
        // <ul>
        //     <li>
        //         <Image
        //             src="/github-icon.svg"
        //             alt="Github icon"
        //             width={30}
        //             height={30}
        //         />
        //     </li>
        //     <li>
        //         <Image
        //             src={'/linkedin-icon.svg'}
        //             alt="LinkedIn icon"
        //             width={30}
        //             height={30}
        //         />
        //     </li>
        //     <li>
        //         <Link
        //             url={'mailto:ben.langenberg987@gmail.com'}
        //             text="hello@ben.com"
        //             underline={true}
        //         />
        //     </li>
        // </ul>
        // </Section>
    );
};

export default Introduction;
