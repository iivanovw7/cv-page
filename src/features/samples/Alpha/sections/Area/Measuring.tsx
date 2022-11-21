import type { ReactElement } from 'react';
import React from 'react';

import { Channel } from './Channel';
import type { MeasuringPoint } from './model/types';
import { sortChannelsByCode } from './model/utils';

import type { Nullable } from '@/shared/types';
import { toArray, uuid } from '@/shared/utils';

export type MeasuringProps = MeasuringPoint;

export const Measuring = (props: MeasuringProps): Nullable<ReactElement> => {
    const {
        '@_code': measuringCode = '-',
        '@_name': measuringName = '-',
        measuringchannel
    } = props;

    if (measuringchannel) {
        return (
            <div className="pl-6 pt-3 mt-2 flex flex-col">
                <h3 className="text-xl font-semibold">
                    Измерения
                    <span className="ml-2 text-gray-400">[measuring]</span>
                </h3>
                <div className="mt-3">
                    <span className="mt-3 text-gray-400">{'<code>  '}</span>
                    <span>{measuringCode}</span>
                </div>
                <div className="mt-1 mb-3">
                    <span className="mt-3 text-gray-400">{'<name>  '}</span>
                    <span>{measuringName}</span>
                </div>
                <div className="flex flex-col md:flex-row border-l-2 border-gray-700">
                    {toArray(measuringchannel)
                        .sort(sortChannelsByCode)
                        .map((channel) => (
                            <div key={uuid()} className="flex-1 w-full md:w-64">
                                <Channel pointName={measuringName} channel={channel} />
                            </div>
                        ))}
                </div>
            </div>
        );
    }

    return null;
};
