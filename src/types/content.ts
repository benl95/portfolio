import { ProjectType } from './projects';
import { ContactType } from './contact';

export interface Content {
	name: string;
	occupation: string;
	about: string;
	contact: ContactType;
	projects: ProjectType[];
}
