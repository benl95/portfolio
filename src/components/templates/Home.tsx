import React, { Component } from 'react';
import { Sections, ProjectDetails } from '@/types/content';
import ProjectItem from '@/components/ProjectItem';

const HomeContent = ({ aboutMe, projects, contact }: Sections) => {
    const projectsList = projects.list.map(
        ({ src, tools, description }: ProjectDetails, i: number | string) => {
            return (
                <ProjectItem
                    key={i}
                    src={src}
                    tools={tools}
                    description={description}
                />
            );
        }
    );
    return (
        <main>
            <section>
                <h2>{aboutMe.title}</h2>
                <p>{aboutMe.name}</p>
                <p>{aboutMe.occupation}</p>
                <p>{aboutMe.about}</p>
            </section>
            <section>
                <h2>{projects.title}</h2>
                <ul>{projectsList}</ul>
            </section>
            <section>
                <h2>{contact.title}</h2>
                <a>{contact.details.email}</a>
            </section>
        </main>
    );
};

export default HomeContent;
