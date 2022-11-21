import classnames from 'classnames';
import type { ReactElement } from 'react';
import React from 'react';

import { GradientText } from './GradientText';

type LinkProps = {
    text: string;
    href: string;
    className?: string;
    download?: boolean;
};

export const Link = (props: LinkProps): ReactElement => {
    const { text, href, className, download } = props;

    return (
        <a
            type="button"
            className={classnames('font-medium dark:text-cyan-600 hover:underline', className)}
            href={href}
            download={download}>
            <GradientText>{text}</GradientText>
        </a>
    );
};
