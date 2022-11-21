import type { MarkdownInstance } from 'astro';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import React from 'react';

import { BlogCard } from './BlogCard';

import type { Frontmatter } from '@/shared/types';

type RecentPostsProps = {
    className?: string;
    postList: MarkdownInstance<Frontmatter>[];
};

export const BlogGallery = (props: RecentPostsProps): ReactElement => {
    const { postList, className } = props;

    return (
        <div className={classNames('grid grid-cols-1 gap-6 md:grid-cols-3', className)}>
            {postList.map((elt) => (
                <BlogCard key={elt.url} instance={elt} />
            ))}
        </div>
    );
};
