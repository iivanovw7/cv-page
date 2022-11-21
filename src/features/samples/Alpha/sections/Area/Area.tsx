import type { ReactElement } from 'react';
import React from 'react';

import { Measuring } from './Measuring';
import type { ReportVariables } from './model/types';
import { getChannelUnits, getMeasuring, sortChannelsByCode } from './model/utils';

import { EnergyLabel } from '@/features/samples/Alpha/sections/Area/EnergyLabel';
import { GradientText } from '@/shared/components';
import type { Nullable } from '@/shared/types';
import { uuid } from '@/shared/utils';
import { getValues } from '@/shared/utils/object';

type AreaProps = {
    report?: Nullable<Record<string, string>>;
};

export const Area = (props: AreaProps): Nullable<ReactElement> => {
    const { report } = props;

    if (report) {
        const [
            areaName = '-',
            inn = '-',
            measuringpoint
        ] = getValues(
            report,
            'message.area.name',
            'message.area.inn',
            'message.area.measuringpoint',
        ) as ReportVariables;

        const {
            points,
            total
        } = getMeasuring(measuringpoint.sort(sortChannelsByCode));

        return (
            <div className="flex flex-col bg-gray-800 p-6 rounded-sm mt-6">
                <h3 className="text-xl font-semibold">
                    Область
                    <span className="ml-2 text-gray-400">[area]</span>
                </h3>
                <div className="mt-3">
                    <span className="mt-3 text-gray-400">{'<name>  '}</span>
                    <span>{areaName}</span>
                </div>
                <div className="mt-1 mb-3">
                    <span className="mt-3 text-gray-400">{'<inn>  '}</span>
                    <span>{inn}</span>
                </div>
                <div className="mt-1 mb-3 flex flex-row">
                    <GradientText className="font-semibold text-lg float-right mr-4 flex flex-col justify-end">
                        {`${total.AP} ${getChannelUnits('AP')}`}
                        <span className="flex justify-end mt-2">
                            <EnergyLabel desc="AP" />
                        </span>
                    </GradientText>
                    <GradientText className="font-semibold text-lg float-right flex flex-col justify-end">
                        {`${total.RP} ${getChannelUnits('RP')}`}
                        <span className="flex justify-end mt-2">
                            <EnergyLabel desc="RP" />
                        </span>
                    </GradientText>
                </div>
                <div className="border-l-2 border-gray-700">
                    {points.map((point) => <Measuring key={uuid()} {...point} />)}
                </div>
            </div>
        );
    }

    return null;
};


