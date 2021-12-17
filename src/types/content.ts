import { LinkType } from '@/types/elements';
export interface ProjectDetails {
    src: string;
    tools: string[];
    description: string;
    repo: string;
}

export interface ContactDetails {
    email: string;
}

export interface AboutMe {
    title: string;
    name: string;
    occupation: string;
    about: string;
    github: string;
    linkedIn: string;
}

export interface Contact {
    title: string;
    details: ContactDetails;
}

export interface Project {
    title?: string;
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
