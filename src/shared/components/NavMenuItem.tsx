import type { ReactElement } from 'react';
import React from 'react';

type NavMenuItemProps = {
    href: string;
    children: string;
};

export const NavMenuItem = (props: NavMenuItemProps): ReactElement => (
    <li className="text-gray-300 hover:text-white">
        <a href={props.href}>
            {props.children}
        </a>
    </li>
);

