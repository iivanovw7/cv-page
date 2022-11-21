import type { ReactElement } from 'react';
import React from 'react';

import type { FrontmatterPage } from '@/shared/types';

type NewerOlderPaginationProps = {
    page: FrontmatterPage;
};

export const NewerOlderPagination = (props: NewerOlderPaginationProps): ReactElement => {
    const { page } = props;

    return (
        <div className="flex justify-center gap-8">
            {page.url.prev && <a href={page.url.prev}>← Newer Posts</a>}
            {page.url.next && <a href={page.url.next}>Older Posts →</a>}
        </div>
    );
};
