import type { Frontmatter, MarkdownInstance } from '@/shared/types';

export const sortByDate = (posts: MarkdownInstance<Frontmatter>[]): MarkdownInstance<Frontmatter>[] => {
    return posts.sort((a, b) => {
        return new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf();
    });
};
