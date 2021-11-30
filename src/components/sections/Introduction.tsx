import React, { Component } from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { AboutMe } from '@/types/content';

const Introduction = ({ title, name, occupation, about }: AboutMe) => {
    return (
        <Section title={title} size="small">
            <p>{name}</p>
            <p>{occupation}</p>
            <p>{about}</p>
        </Section>
    );
};

export default Introduction;
