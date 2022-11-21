import type { ReactElement } from 'react';
import React from 'react';

import type { Nullable } from '@/shared/types';
import { getValues } from '@/shared/utils/object';

type SenderProps = {
    report?: Nullable<Record<string, string>>;
};

type ReportVariables = Nullable<string>[];

export const Sender = (props: SenderProps): Nullable<ReactElement> => {
    const { report } = props;

    if (report) {
        const [
            senderName = '-',
            inn = '-',
        ] = getValues(
            report,
            'message.sender.name',
            'message.sender.inn',
        ) as ReportVariables;

        return (
            <div className="flex flex-col bg-gray-800 p-6 rounded-sm mt-6">
                <h3 className="text-xl font-semibold">
                    Отправитель
                    <span className="ml-2 text-gray-400">[sender]</span>
                </h3>
                <div className="mt-3">
                    <span className="mt-3 text-gray-400">{'<name>  '}</span>
                    <span>{senderName}</span>
                </div>
                <div className="mt-1">
                    <span className="mt-3 text-gray-400">{'<inn>  '}</span>
                    <span>{inn}</span>
                </div>
            </div>
        );
    }

    return null;
};
