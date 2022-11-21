import type { ReactElement } from 'react';
import React from 'react';

type HeroSocialProps = {
    src: string;
    alt: string;
};

export const HeroSocial = (props: HeroSocialProps): ReactElement => (
    <img
        className="h-12 w-12 hover:translate-y-1"
        src={props.src}
        alt={props.alt}
        loading="lazy"
    />
);

