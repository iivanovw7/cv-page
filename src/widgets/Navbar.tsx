import type { ReactElement } from 'react';
import React from 'react';

import { Logo, NavbarTwoColumns, NavMenu, NavMenuItem, Section } from '@/shared/components';

export const Navbar = (): ReactElement => (
    <Section className="h-[theme(spacing.20)]">
        <NavbarTwoColumns>
            <a href="/">
                <Logo
                    icon={
                        <img
                            className="h-8 w-8 mr-4"
                            src="/assets/images/header-logo.png"
                            alt="Logo image"
                            loading="lazy" />
                    }
                    name="Igor Ivanov"
                />
            </a>
            <NavMenu>
                <NavMenuItem href="https://github.com/iivanovw7">
                    GitHub
                </NavMenuItem>
                <NavMenuItem href="https://twitter.com/_IvanovIgor">
                    Twitter
                </NavMenuItem>
                <NavMenuItem href="https://www.linkedin.com/in/iivanovw7">
                    Linkedin
                </NavMenuItem>
            </NavMenu>
        </NavbarTwoColumns>
    </Section>
);
