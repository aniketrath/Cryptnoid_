import React from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    rotate?: 0 | 90 | 180 | 270;
}

export default function Image({
    src,
    alt = '',
    rotate = 0
} : ImageProps) {
    return (<img src={src}
        alt={alt}
        className={
            `select-none ${
                rotate === 90 ? 'rotate-90' : rotate === 180 ? 'rotate-180' : rotate === 270 ? 'rotate-270' : ''
            }`
        }/>);
}
