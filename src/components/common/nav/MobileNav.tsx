import React from 'react';
import Image from 'next/image';
interface Props {
    text: string;
}

const MobileNav = ({ text }: Props) => {
    const width: number = 37;
    const height: number = 25;

    return (
        <nav>
            <div>
                <ul>
                    {/* TODO: pass src and text as props */}
                    <li>
                        <a href={'http://localhost:3000'}>{text}</a>
                    </li>
                    <li>
                        <Image
                            src="/hamburger.svg"
                            alt="Hamburger menu icon"
                            width={width}
                            height={height}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;
