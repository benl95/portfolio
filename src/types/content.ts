import { LinkType } from '@/types/link';

export type ProjectDetails = {
    src: string;
    tools: string[];
    description: string;
};

export type ContactDetails = {
    email: string;
    github: string;
    linkedIn: string;
};

export type AboutMe = {
    title: string;
    name: string;
    occupation: string;
    about: string;
};

export type Contact = {
    title: string;
    details: ContactDetails;
};

export interface Project {
    title: string;
    list: ProjectDetails[];
}
export interface Sections {
    aboutMe: AboutMe;
    projects: Project;
    contact: Contact;
}

export interface Content {
    links: LinkType[];
    sections: Sections;
}
