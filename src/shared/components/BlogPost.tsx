import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import { PostContent, PostHeader, Section } from '@/shared/components';
import { APP_CONFIG } from '@/shared/config';
import type { Frontmatter } from '@/shared/types';

type BlogPostProps = {
    frontmatter: Frontmatter;
    children: ReactNode;
};

export const BlogPost = (props: BlogPostProps): ReactElement => {
    const { frontmatter, children } = props;

    return (
        <Section>
            <PostHeader content={frontmatter} author={APP_CONFIG.author} />
            <PostContent content={frontmatter}>
                {children}
            </PostContent>
        </Section>
    );
};
