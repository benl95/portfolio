import React from 'react';
import styles from './Contact.module.css';
import { Contact } from '@/types/content';

const Contact = ({ title, details }: Contact) => {
    return (
        <section id="contact">
            <div className={styles.Container}>
                <h2 className={styles.Title}>{title}</h2>
                <a className={styles.Link} href={`mailto:${details.email}`}>
                    {details.email}
                </a>
            </div>
        </section>
    );
};

export default Contact;
