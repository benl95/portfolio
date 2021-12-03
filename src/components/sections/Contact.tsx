import React from 'react';
import Link from '@/components/Link';
import Title from '@/components/Title';
import { Contact } from '@/types/content';
import { ContactSection } from 'components/styles/Section.styles';

const Contact = ({ title, details }: Contact) => {
    return (
        <ContactSection>
            <Title title={title} weight="bold" size="xl" contrast="high" />
            <Link
                text={details.email}
                url={`mailto:${details.email}`}
                size="xl"
                weight="bold"
                underline={true}
            />
        </ContactSection>
    );
};

export default Contact;
