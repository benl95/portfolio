export interface Navigation {
    links: LinkType[];
}

export type LinkType = {
    url: string;
    text: string;
};
