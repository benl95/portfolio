import React, { Component } from 'react';
import { Sections } from '@/types/content';
import Introduction from '@/sections/Introduction';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

const HomeContent = ({ aboutMe, projects, contact }: Sections) => {
    return (
        <>
            <header>
                <Introduction {...aboutMe} />
            </header>
            <main>
                <Projects {...projects} />
                <Contact {...contact} />
            </main>
        </>
    );
};

export default HomeContent;
