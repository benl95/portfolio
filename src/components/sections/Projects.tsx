import React from 'react';
import ProjectList from '@/components/projects/ProjectList';
import { Project } from '@/types/content';

const Projects = ({ title, list }: Project) => {
    return (
        <section>
            <h2>{title}</h2>
            <ProjectList list={list} />
        </section>
    );
};

export default Projects;
