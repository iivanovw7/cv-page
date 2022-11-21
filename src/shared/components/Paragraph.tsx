import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type ParagraphProps = {
    name: string;
    description: string;
    category: ReactNode;
    content: ReactNode;
};

export const Paragraph = (props: ParagraphProps): ReactElement => (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <div className="text-2xl font-semibold">{props.name}</div>
                <div className="md:ml-3 flex flex-wrap gap-1">{props.category}</div>
            </div>
            <p className="mt-3 text-gray-400">{props.description}</p>
            <div>{props.content}</div>
        </div>
    </div>
);
