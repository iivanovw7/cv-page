import type { ReactElement, PropsWithChildren } from 'react';
import React from 'react';

import type { Frontmatter } from '@/shared/types';

type PostContentProps = PropsWithChildren<{
    content: Frontmatter;
}>;

export const PostContent = (props: PostContentProps): ReactElement => {
    const { content: { imgSrc, imgAlt = '' }, children } = props;

    return (
        <div className="mx-auto mt-5 max-w-screen-lg">
            {imgSrc && (
                <div className="aspect-w-3 aspect-h-2">
                    <img
                        className="h-full w-full rounded-lg object-cover object-center"
                        src={imgSrc}
                        alt={imgAlt}
                        loading="lazy"
                    />
                </div>
            )}
            <div className="post-content p-3 prose-invert mt-8 prose-img:rounded-lg">
                {children}
            </div>
        </div>
    );
};
