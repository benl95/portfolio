import React, { Component } from 'react';
import Section from '@/components/Section';
import Paragraph from '@/components/Paragraph';
import { AboutMe } from '@/types/content';

const Introduction = ({ title, name, occupation, about }: AboutMe) => {
    return (
        <Section title={title} size="title-s">
            <Paragraph text={name} size="font-l" contrast="high" />
            <Paragraph text={occupation} size="font-l" contrast="high" />
            <Paragraph text={about} />
        </Section>
    );
};

export default Introduction;
