import React from 'react';
import { NavContainer } from 'components/styles/Header.styles';
import Link from '@/components/Link';
import Image from 'next/image';

const MobileNav = () => {
    const width: number = 37;
    const height: number = 25;

    return (
        <nav>
            <NavContainer>
                {/* TODO: pass src and text as props */}
                <Link url={'http://localhost:3000'} text="Langenberg" />
                <Image
                    src="/hamburger.svg"
                    alt="Hamburger menu icon"
                    width={width}
                    height={height}
                />
            </NavContainer>
        </nav>
    );
};

export default MobileNav;
