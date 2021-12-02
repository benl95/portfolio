import React, { Component } from 'react';
import Section from '@/components/Section';
import Paragraph from '@/components/Paragraph';
import { AboutMe } from '@/types/content';

const Introduction = ({ title, name, occupation, about }: AboutMe) => {
    return (
        <Section title={title}>
            <Paragraph text={name} />
            <Paragraph text={occupation} />
            <Paragraph text={about} />
        </Section>
    );
};

export default Introduction;
