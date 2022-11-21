import type { ReactElement } from 'react';
import React from 'react';

type PaginationHeaderProps = {
    title: string;
    description: string;
};

export const PaginationHeader = (props: PaginationHeaderProps): ReactElement => {
    const { title, description } = props;

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="mt-3 text-gray-200">{description}</div>
        </div>
    );
};
