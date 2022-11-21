import type { ReactElement } from 'react';
import React from 'react';

import { GradientText, HeroAvatar, HeroSocial, Section } from '@/shared/components';

export const Hero = (): ReactElement => (
    <Section>
        <HeroAvatar
            title={
                <span>
                    <span>Hi there, I&apos;m&nbsp;</span>
                    <GradientText>Igor Ivanov</GradientText>
                    <span>👋</span>
                </span>
            }
            description={
                <div className="text-lg">
                    <div>
                        I am a Front End developer with industry experience building websites and web applications.
                    </div>
                    <br />
                    <div>
                        <span>I specialize in&nbsp;</span>
                        <GradientText>JavaScript</GradientText>
                        <span> / </span>
                        <GradientText>TypeScript&nbsp;</GradientText>
                        <span>and have professional experience working with React.</span>
                    </div>
                    <br />
                </div>
            }
            avatar={<img className="h-72 w-96" src="/assets/images/hero.png" alt="Avatar image" loading="lazy" />}
            socialButtons={
                <>
                    <a className="mr-1" href="https://t.me/iivanovw7">
                        <HeroSocial src="/assets/images/telegram-icon.png" alt="Telegram icon" />
                    </a>
                    <a className="mr-1" href="https://twitter.com/_IvanovIgor">
                        <HeroSocial src="/assets/images/twitter-icon.png" alt="Twitter icon" />
                    </a>
                    <a className="mr-1" href="https://www.facebook.com/iivanovw7">
                        <HeroSocial src="/assets/images/facebook-icon.png" alt="Facebook icon" />
                    </a>
                    <a className="mr-1" href="https://www.linkedin.com/in/iivanovw7">
                        <HeroSocial src="/assets/images/linkedin-icon.png" alt="Linkedin icon" />
                    </a>
                    <a href="https://github.com/iivanovw7">
                        <HeroSocial src="/assets/images/github-icon.png" alt="GitHub icon" />
                    </a>
                    <a href="mailto:iivanovw7@gmail.com">
                        <HeroSocial src="/assets/images/email-icon.png" alt="Email icon" />
                    </a>
                </>
            }
        />
    </Section>
);
