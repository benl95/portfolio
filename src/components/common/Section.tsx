import React, { PureComponent } from 'react';
import { Children } from '@/types/content';

interface SectionProps extends Children {
    title: string;
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default Section;
