import React, { Component } from 'react';
import Section from '@/components/Section';
import Paragraph from '@/components/Paragraph';
import { AboutMe } from '@/types/content';
import {
    ParagraphSizeMap,
    TitleSizeMap,
    ContrastLevels,
} from '@/types/StyleMaps';

const Introduction = ({ title, name, occupation, about }: AboutMe) => {
    return (
        <Section title={title} size={TitleSizeMap.s}>
            <Paragraph
                text={name}
                size={ParagraphSizeMap.l}
                contrast={ContrastLevels.high}
            />
            <Paragraph
                text={occupation}
                size={ParagraphSizeMap.l}
                contrast={ContrastLevels.high}
            />
            <Paragraph text={about} />
        </Section>
    );
};

export default Introduction;
