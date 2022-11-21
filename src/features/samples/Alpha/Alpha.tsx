import { XMLParser } from 'fast-xml-parser';
import type { ReactElement } from 'react';
import React, { useCallback, useEffect, useState } from 'react';

import { PARSER_OPTIONS, ENCODING, REPORT_TYPE } from './model/constants';
import { Area } from './sections/Area';
import { Datetime } from './sections/Datetime';
import { FileName } from './sections/FileName';
import { Sender } from './sections/Sender';

import type { DropzoneProps } from '@/shared/components';
import { GradientText, Section, Page, Dropzone } from '@/shared/components';
import { Link } from '@/shared/components/Link';
import { useFirstMountState } from '@/shared/hooks';
import type { AnyObject, Nullable } from '@/shared/types';

const parser = new XMLParser(PARSER_OPTIONS);

export const Alpha = (): ReactElement => {
    const isFirstMount = useFirstMountState();

    const [reader, setReader] = useState<Nullable<FileReader>>(null);
    const [error, setError] = useState<string>('');
    const [report, setReport] = useState<Nullable<AnyObject>>(null);
    const [file, setFile] = useState<Nullable<File>>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleDrop: DropzoneProps['onDrop'] = useCallback((newFile: File) => {
        if (reader) {
            setLoading(true);
            setFile(newFile);

            reader.onload = () => {
                setError('');
                setReport(parser.parse(String(reader.result)) as AnyObject);
            };

            try {
                reader.readAsText(newFile, ENCODING);
            }
            catch (errorData: unknown) {
                setError(String(errorData));
            }
        }
    }, [reader]);

    const handleError: DropzoneProps['onError'] = useCallback((errorData) => {
        setError(errorData);
    }, []);

    useEffect(() => {
        if (isFirstMount) {
            setReader(new FileReader());
        }
    }, [isFirstMount]);

    useEffect(() => {
        setLoading(false);
    }, [report, error]);

    return (
        <Page>
            <Section title={<GradientText>Просмотр отчетов &quot;ENERGY ALPHA&quot;</GradientText>}>
                <div className="flex flex-col sm:flex-row bg-gray-800 p-6 rounded-sm">
                    <div className="basis-3/4">
                        <FileName file={file} />
                        <Link
                            href="/assets/xml/80020_7706284124_20221031_9186767_7800013400.xml"
                            text="Скачать пример отчёта"
                            download />
                    </div>
                    <div className="basis-1/4 mt-6 sm:mt-0">
                        <div className="flex justify-center items-center w-full">
                            <Dropzone
                                acceptTypes={[REPORT_TYPE]}
                                label="Загрузить файл отчёта"
                                onDrop={handleDrop}
                                onError={handleError}
                                isLoading={isLoading} />
                        </div>
                        {error && (
                            <div className="flex justify-center items-center w-full mt-2 text-red-700">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
                <Datetime report={report} />
                <Sender report={report} />
                <Area report={report} />
            </Section>
        </Page>
    );
};
