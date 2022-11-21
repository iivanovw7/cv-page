import classnames from 'classnames';
import type { ReactElement } from 'react';
import React from 'react';

import type { Nullable } from '@/shared/types';

export type EnergyLabelProps = {
    desc: string;
    className?: string;
};

export const EnergyLabel = (props: EnergyLabelProps): Nullable<ReactElement> => {
    const { desc, className } = props;

    switch (desc) {
        case 'AP': {
            return (
                <span className={classnames('bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded', className)}>
                    Активная
                </span>
            );
        }
        case 'RP': {
            return (
                <span className={classnames('bg-red-200 text-red-900 text-xs font-semibold px-2.5 py-0.5 rounded', className)}>
                    Реактивная
                </span>
            );
        }
        default: {
            return null;
        }
    }
};
