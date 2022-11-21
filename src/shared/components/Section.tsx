import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type SectionProps = {
    title?: ReactNode;
    children: ReactNode;
    className?: string;
};

export const Section = (props: SectionProps): ReactElement => {
    const {
        className,
        title,
        children
    } = props;

    return (
        <div className={classNames('mx-auto max-w-screen-lg px-3 py-6', className)}>
            {title && (
                <div className="mb-6 text-2xl font-bold">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};
