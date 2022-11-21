import { format } from 'date-fns';
import type { ReactElement } from 'react';
import React from 'react';

import type { Frontmatter } from '@/shared/types';

type PostHeaderProps = {
    content: Frontmatter;
    author: string;
};

export const PostHeader = (props: PostHeaderProps): ReactElement => {
    const { author, content } = props;

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">{content.title}</h1>
            <div className="mt-2 text-center text-sm text-gray-400">
                <span>By </span>
                <span>{`${author} `}</span>
                <span>on </span>
                {format(new Date(content.pubDate), 'LLL d, yyyy')}
            </div>
        </div>
    );
};
