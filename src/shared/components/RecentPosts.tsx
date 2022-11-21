import type { MarkdownInstance } from 'astro';
import type { ReactElement } from 'react';
import React from 'react';

import { BlogGallery } from '@/shared/components/BlogGallery';
import { GradientText } from '@/shared/components/GradientText';
import { Section } from '@/shared/components/Section';
import type { Frontmatter } from '@/shared/types';

type IRecentPostsProps = {
    className?: string;
    postList: MarkdownInstance<Frontmatter>[];
};

export const RecentPosts = (props: IRecentPostsProps): ReactElement => {
    const { postList, className } = props;

    return (
        <Section
            className={className}
            title={
                <div className="flex items-baseline justify-between">
                    <div>
                        <span>Recent </span>
                        <GradientText>Posts</GradientText>
                    </div>

                    <div className="text-sm">
                        <a href="/posts">View all Posts →</a>
                    </div>
                </div>
            }>
            <BlogGallery postList={postList} />
        </Section>
    );
};

