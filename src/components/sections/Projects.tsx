import React, { Component } from 'react';
import Section from '@/components/Section';
import ProjectItem from '@/components/ProjectItem';
import { Project, ProjectDetails } from '@/types/content';

const Projects = ({ title, list }: Project) => {
    const projectsList = list.map(
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
        <Section title={title}>
            <ul>{projectsList}</ul>
        </Section>
    );
};

export default Projects;
