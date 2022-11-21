import type { MarkdownInstance } from 'astro';
import classNames from 'classnames';
import { format } from 'date-fns';
import type { ReactElement } from 'react';
import React from 'react';

import type { Frontmatter } from '@/shared/types';

type BlogCardProps = {
    className?: string;
    instance: MarkdownInstance<Frontmatter>;
};

export const BlogCard = (props: BlogCardProps): ReactElement => {
    const {
        instance: {
            url,
            frontmatter: {
                imgSrc,
                imgAlt = '',
                title,
                pubDate,
                description
            }
        },
        className
    } = props;

    return (
        <a className={classNames('hover:translate-y-1', className)} href={url}>
            <div className="overflow-hidden rounded-md bg-slate-800 max-h-64">
                {imgSrc && (
                    <div className="aspect-w-3 aspect-h-2">
                        <img
                            className="h-full w-full object-cover object-center"
                            src={imgSrc}
                            alt={imgAlt}
                            loading="lazy"
                        />
                    </div>
                )}
                <div className="px-3 pt-4 pb-6 text-center">
                    <h2 className="text-xl font-semibold">
                        {title}
                    </h2>
                    <div className="mt-1 text-xs text-gray-400">
                        {format(new Date(pubDate), 'LLL d, yyyy')}
                    </div>
                    <div className="... mt-2 text-sm truncate">
                        {description}
                    </div>
                </div>
            </div>
        </a>
    );
};

