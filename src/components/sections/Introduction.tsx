import React from 'react';
import Image from 'next/image';
import { AboutMe } from '@/types/content';

const Introduction = ({ title, name, occupation }: AboutMe) => {
    return (
        <section>
            <div>
                <h2 title={title}>{title}</h2>
                <p>{name}</p>
                <p>{occupation}</p>
            </div>
            <ul>
                <li>
                    <Image
                        src="/github-icon.svg"
                        alt="Github icon"
                        width={30}
                        height={30}
                    />
                </li>
                <li>
                    <Image
                        src={'/linkedin-icon.svg'}
                        alt="LinkedIn icon"
                        width={30}
                        height={30}
                    />
                </li>
                <li>
                    <a href={'mailto:ben.langenberg987@gmail.com'}>
                        hello@ben.com
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Introduction;
