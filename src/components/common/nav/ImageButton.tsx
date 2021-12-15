import React from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    callback: any;
}

const ImageButton = ({ src, alt, width, height, callback }: ImageProps) => {
    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        callback();
    }

    return (
        <button onClick={handleClick}>
            <Image src={src} alt={alt} width={width} height={height} />
        </button>
    );
};

export default ImageButton;
