import React, { Component } from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Link from '@/components/Link';
import { Contact } from '@/types/content';

const Contact = ({ title, details }: Contact) => {
    return (
        <Section title={title}>
            <Container>
                <Link url={`mailto:${details.email}`} text={details.email} />
            </Container>
        </Section>
    );
};

export default Contact;
