import type { ReactElement } from 'react';
import React from 'react';

import { ColorTags, GradientText, Page, Paragraph, Section, Tags } from '@/shared/components';

export const Content = (): ReactElement => (
    <Page>
        <Section title={<GradientText>OBJECTIVE</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                Detail-oriented professional with 3+ years of experience interested in building usable,
                useful,
                well-constructed web applications. I want to understand the business and participate in the
                fate of the
                product with ideas. I consider it an important part of the work to see the end result and be
                able to
                influence the quality of the product.
            </div>
        </Section>
        <Section title={<GradientText>SKILLS</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <ul className="list-disc pl-6">
                    <li>HTML, CSS, SASS</li>
                    <li>Javascript / Typescript</li>
                    <li>Single page applications, responsive web design</li>
                    <li>Git (GitHub, GitLab)</li>
                    <li>Webpack 3-5, Gulp, Docker</li>
                    <li>Cross-Browser Development</li>
                    <li>Unit testing with Jest/Mocha.</li>
                    <li>
                        ReactJS unit testing with Jest + Enzyme/React testing library or Chai+Mocha+Enzyme
                    </li>
                    <li>Redux, Redux Toolkit, MobX</li>
                </ul>
            </div>
        </Section>
        <Section title={<GradientText>WORK EXPERIENCE</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <Paragraph
                    name="Frontend developer, MYTONA PTE. LTD"
                    description="Singapore"
                    category={<Tags color={ColorTags.SKY}>January 2021 - current time</Tags>}
                    content={
                        <div className="flex flex-col gap-1 mt-8 text-lg">
                            <h3 className="text-lg font-semibold">Responsibilities:</h3>
                            <ul className="list-disc pl-6">
                                <li className="mt-3 text-gray-300">
                                    Development of an internal company portal that combines the functions of a
                                    social
                                    network for employees (with a system of achievements and the ability to
                                    use internal
                                    corporate currency to order merchandise and gifts) and a CRM system for
                                    portal
                                    administration and logistics management (delivery, tracking, accounting of
                                    merchandise issued to employees).
                                </li>
                                <li className="mt-3 text-gray-300">
                                    <span>Working with </span>
                                    <GradientText>React </GradientText>
                                    (
                                    <GradientText>Typescript</GradientText>
                                    ) and
                                    <GradientText> MobX </GradientText>
                                    ,
                                    <GradientText> Webpack</GradientText>
                                    .
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Developing layout of sections and system components according to figma
                                    layouts.
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Development of the required new functionality / business logic on web
                                    application
                                    and BFF. Scrum work.
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Paragraph
                    name="Frontend developer, AB Technology"
                    description="Saint-Petersburg, Russia"
                    category={<Tags color={ColorTags.SKY}>February 2019 – February 2021</Tags>}
                    content={
                        <div className="flex flex-col gap-1 mt-8 text-lg">
                            <h3 className="text-lg font-semibold">Responsibilities:</h3>
                            <ul className="list-disc pl-6">
                                <li className="mt-3 text-gray-300">
                                    Working on an online cinema project, a project using
                                    <GradientText> React </GradientText>
                                    and
                                    <GradientText> Redux</GradientText>
                                    , testing
                                    with
                                    <GradientText> Chai </GradientText>
                                    +
                                    <GradientText> Enzyme</GradientText>
                                    ,
                                    <GradientText> react-md@v1</GradientText>
                                    .
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Developed layout of various site components, worked in
                                    <GradientText> zeplin </GradientText>
                                    and
                                    <GradientText> figma</GradientText>
                                    .
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Development of SPA from scratch for one-time access and watching a movie
                                    using a
                                    booking code. App contains two main scenes: the login and the player /
                                    movie
                                    description page. The
                                    <GradientText> clappr.js </GradientText>
                                    player, unit tests on
                                    <GradientText> Chai </GradientText>
                                    +
                                    <GradientText> Enzyme</GradientText>
                                    , used the
                                    <GradientText> Redux Toolkit </GradientText>
                                    for state management.
                                </li>
                            </ul>
                        </div>
                    }
                />
                <Paragraph
                    name="PLC & SCADA engineer, BCC Group"
                    description="Saint-Petersburg, Russia"
                    category={<Tags color={ColorTags.SKY}>January 2013 – February 2019</Tags>}
                    content={
                        <div className="flex flex-col gap-1 mt-8 text-lg">
                            <h3 className="text-lg font-semibold">Responsibilities:</h3>
                            <ul className="list-disc pl-6">
                                <li className="mt-3 text-gray-300">
                                    Creation of algorithms for the PLC, according to the design documentation,
                                    with the
                                    subsequent launch of the systems into production operation.
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Development of a graphical interface for a dispatching system in Desigo
                                    Insight,
                                    WinCC, Citect.
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Development of methods for integrating third party equipment into Desigo
                                    Insight.
                                    Selection of the required hardware and software complex.
                                </li>
                                <li className="mt-3 text-gray-300">
                                    Training of customer representatives to work with the supplied equipment,
                                    technical
                                    support for users.
                                </li>
                            </ul>
                        </div>
                    }
                />
            </div>
        </Section>
        <Section title={<GradientText>CODE SAMPLES</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <ul className="list-disc pl-6">
                    <li className="mt-3 text-gray-300">
                        Pet project React / Typescript SPA in development, this the most recent code sample.
                        <a
                            href="https://github.com/iivanovw7/netflix-home"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Github link</GradientText>
                        </a>
                    </li>
                    <li className="mt-3 text-gray-300">
                        Example of usage google maps to create map with custom markers.
                        <a
                            href="https://github.com/iivanovw7/mobile-map-markers"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Github link</GradientText>
                        </a>
                    </li>
                    <li className="mt-3 text-gray-300">
                        React Typescript (MobX) functional component example (also includes store).
                        <a
                            href="https://gist.github.com/iivanovw7/e7710de9b183437d4b0e0628ca88c5b6"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Gist link</GradientText>
                        </a>
                    </li>
                    <li className="mt-3 text-gray-300">
                        React (Redux Toolkit) class component examples.
                        <a
                            href="https://gist.github.com/iivanovw7/f46fc7539910e2d91debc281b88236bc"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Gist link #1</GradientText>
                        </a>
                        ,
                        <a
                            href="https://gist.github.com/iivanovw7/ba3703b783d7d05a2c670e4a50d1c210"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Gist link #2</GradientText>
                        </a>
                    </li>
                    <li className="mt-3 text-gray-300">
                        Multiselect component could be used for filters. Works in codesandbox.
                        <a
                            href="https://codesandbox.io/s/multiselect-ceke1"
                            className="no-underline hover:underline hover:text-cyan-400 ml-2"
                        >
                            <GradientText>Sandbox link</GradientText>
                        </a>
                    </li>
                </ul>
            </div>
        </Section>
        <Section title={<GradientText>ADDITIONAL SKILLS</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <ul className="list-disc pl-6">
                    <li>Working in a Linux environment. Debian: Ubuntu. ArchLinux: Manjaro.</li>
                    <li>
                        I use WebStorm and I&apos;am also familiar with graphic packages such as Gimp and
                        Krita.
                    </li>
                    <li>Teamwork</li>
                    <li>Problem-solving</li>
                </ul>
            </div>
        </Section>
        <Section title={<GradientText>FOREIGN LANGUAGES</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <ul className="list-disc pl-6">
                    <li>English - Advanced</li>
                    <li>Russian - Native speaker</li>
                </ul>
            </div>
        </Section>
        <Section title={<GradientText>EDUCATION</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                Engineer, St. Petersburg University of Architecture and Civil Engineering (SPBGASU),
                Department of
                Expertise and Real Estate Management. Form of study: full-time (2004 - 2009)
            </div>
        </Section>
        <Section title={<GradientText>HOBBIES</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">
                <ul className="list-disc pl-6">
                    <li>Bicycle</li>
                    <li>Snowboard</li>
                    <li>Travel, Gaming</li>
                </ul>
            </div>
        </Section>
        <Section title={<GradientText>REFERENCES</GradientText>}>
            <div className="flex flex-col gap-6 text-lg">References available on request.</div>
        </Section>
    </Page>
);
