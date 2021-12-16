import React from 'react';
import ProjectList from '@/components/projects/ProjectList';
import styles from './Projects.module.css';
import { Project } from '@/types/content';

const Projects = ({ title, list }: Project) => {
    return (
        <section className={styles.Line} id="projects">
            <div className={styles.Container}>
                <h2 className={styles.Title}>{title}</h2>
                <ProjectList list={list} />
            </div>
        </section>
    );
};

export default Projects;
