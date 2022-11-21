import type { ReactElement } from 'react';
import React from 'react';

import { GradientText, Section } from '@/shared/components';
import { APP_CONFIG } from '@/shared/config';

export const Footer = (): ReactElement => (
    <Section className="h-[theme(spacing.20)]">
        <span>© Copyright&nbsp;</span>
        <span>{new Date().getFullYear()}</span>
        <span>&nbsp;by&nbsp;</span>
        <GradientText>{APP_CONFIG.siteName}</GradientText>
    </Section>
);
