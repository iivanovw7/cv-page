import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import React from 'react';

import './Page.css';

export type PageProps = PropsWithChildren<{
    className?: string;
}>;

export const Page = (props: PageProps): ReactElement => {
    const { children, className } = props;

    return (
        <div className={classNames('cv-page', className)}>
            {children}
        </div>
    );
};
