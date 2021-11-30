import React, { Component } from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
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
            <Container>
                <ul>{projectsList}</ul>
            </Container>
        </Section>
    );
};

export default Projects;
