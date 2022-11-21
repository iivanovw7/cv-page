import type { ReactElement } from 'react';
import React from 'react';

import { EnergyLabel } from './EnergyLabel';
import type { ChannelVariables, Measurement, MeasuringChannel } from './model/types';
import { formatHours, getChannelName, getChannelUnits } from './model/utils';

import { GradientText } from '@/shared/components';
import type { Nullable } from '@/shared/types';
import { pluck, uuid } from '@/shared/utils';
import { getValues } from '@/shared/utils/object';

export type ChannelProps = {
    pointName?: string;
    channel?: Nullable<MeasuringChannel>;
};

export const Channel = (props: ChannelProps): Nullable<ReactElement> => {
    const { channel, pointName } = props;

    if (channel) {
        const [
            code = '-',
            desc = '-',
            period = []
        ] = getValues(
            channel,
            '@_code',
            '@_desc',
            'period',
        ) as ChannelVariables;

        const total = pluck(period, 'value').reduce((prev, curr) => {
            return Number(prev) + Number(curr);
        }, 0);

        return (
            <div className="pl-6 mt-3 flex flex-col">
                <h3 className="text-xl font-semibold w-full">
                    <span className="mr-2">
                        {getChannelName(pointName)}
                    </span>
                    <span className="text-lg text-gray-400">{`[${code} - ${desc}]`}</span>
                    <GradientText className="text-lg float-right">
                        {`${total} ${getChannelUnits(desc)}`}
                    </GradientText>
                </h3>
                <div className="flex flex-row justify-end">
                    <span><EnergyLabel desc={desc} /></span>
                </div>
                <div className="overflow-auto max-h-80 relative shadow-md sm:rounded-lg mt-3">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead
                            className="text-xs text-gray-400 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-4">
                                    #
                                </th>
                                <th scope="col" className="py-3 px-4">
                                    Начало
                                </th>
                                <th scope="col" className="py-3 px-4">
                                    Окончание
                                </th>
                                <th scope="col" className="py-3 px-4">
                                    Значение
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {period.map((measurement: Measurement, index: number) => (
                                <tr key={uuid()} className="bg-gray-900 border-gray-700">
                                    <td className="py-1 px-4">{index}</td>
                                    <td className="py-1 px-4">{formatHours(measurement['@_start'])}</td>
                                    <td className="py-1 px-4">{formatHours(measurement['@_end'])}</td>
                                    <td className="py-1 px-4">{measurement.value}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="text-xs text-white font-semibold">
                                <th scope="row" className="py-1 px-4 text-base">Итог</th>
                                <td className="py-1 px-4" />
                                <td className="py-1 px-4" />
                                <td className="py-1 px-4">{`${total} ${getChannelUnits(desc)}`}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }

    return null;
};
