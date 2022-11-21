import type { ReactElement } from 'react';
import React from 'react';

import { GradientText } from '@/shared/components';
import type { Nullable } from '@/shared/types';

type FileNameProps = {
    file?: Nullable<File>;
};

export const FileName = (props: FileNameProps): ReactElement => {
    const { file } = props;

    return (
        <div className="flex flex-col bg-gray-800 rounded-sm">
            <span>Для вывода отчета загрузите файл отчёта с расширением XML</span>
            <GradientText className="mt-2 mb-2">{file?.name || ''}</GradientText>
        </div>
    );
};
