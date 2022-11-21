import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type GradientTextProps = {
    className?: string;
    children: ReactNode;
};

export const GradientText = (props: GradientTextProps): ReactElement => {
    const { className, children } = props;

    return (
        <span
            className={classNames(
                'bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent',
                className)}>
            {children}
        </span>
    );
};
