import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type NavMenuProps = {
    children: ReactNode;
};

export const NavMenu = (props: NavMenuProps): ReactElement => (
    <nav>
        <ul className="flex gap-x-3 font-medium text-gray-200">{props.children}</ul>
    </nav>
);
