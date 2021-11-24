export type AboutMe = {
    name: string;
    occupation: string;
    about: string;
};

export type Project = {
    image: string;
    tools: string[];
    description: string;
};

export type Contact = {
    email: string;
    github: string;
    linkedIn: string;
};

export interface Sections {
    aboutMe: AboutMe;
    projects: Project[];
    contact: Contact[];
}
