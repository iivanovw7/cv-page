import rss from '@astrojs/rss';

import { APP_CONFIG } from '@/shared/config';

export const get = (): Promise<{body: string}> => {
    return rss({
        title: APP_CONFIG.title,
        description: APP_CONFIG.description,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        site: import.meta.env.SITE,
        items: import.meta.glob('./**/*.md'),
        customData: '<language>en-us</language>',
    });
};
