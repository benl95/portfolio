import React from 'react';
import { Contact } from '@/types/content';

const Contact = ({ title, details }: Contact) => {
    return (
        <section>
            <h2>{title}</h2>
            <a href={`mailto:${details.email}`}>{details.email}</a>
        </section>
    );
};

export default Contact;
