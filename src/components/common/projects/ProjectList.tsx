import React from 'react';
import ProjectItem from './ProjectItem';
import styles from './ProjectList.module.css';
import { Project, ProjectDetails } from '@/types/content';

const ProjectList = ({ list }: Project) => {
    const projectsList = list.map(
        (
            { src, tools, description, repo }: ProjectDetails,
            i: number | string
        ) => {
            return (
                <li key={i}>
                    <ProjectItem
                        src={src}
                        tools={tools}
                        description={description}
                        repo={repo}
                    />
                </li>
            );
        }
    );

    return <ul className={styles.Container}>{projectsList}</ul>;
};

export default ProjectList;
