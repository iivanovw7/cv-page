import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type LogoProps = {
    icon: ReactNode;
    name: string;
};

export const Logo = (props: LogoProps): ReactElement => (
    <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
        {props.icon}
        {props.name}
    </div>
);
