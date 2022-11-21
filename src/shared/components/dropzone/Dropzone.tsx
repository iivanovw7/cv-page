import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { useCallback, useMemo } from 'react';
import * as ReactDropzone from 'react-dropzone';
import type { FileError, Accept, DropzoneOptions, DropzoneState } from 'react-dropzone';

import type { Pixels, ErrorMessage, Maybe } from '@/shared/types';

type DropError = FileError['code'];
type UseDropzone = (options?: DropzoneOptions) => DropzoneState;

export type AcceptType = 'XML';
export type AcceptMimeType = {
    key: string;
    extensions: Array<string>;
};

const MIME_TYPES: Record<AcceptType, AcceptMimeType> = {
    XML: {
        key: 'application/xml',
        extensions: ['.xml']
    },
};

export type DropzoneProps = {
    className?: string;
    label?: string;
    acceptTypes: AcceptType[];
    imageSize?: Pixels;
    beforeDropContent?: ReactNode;
    afterDropContent?: ReactNode;
    disabled?: boolean;
    onDrop: (file: File) => void;
    onDelete?: () => void;
    onError: (error: ErrorMessage) => void;
    isLoading?: boolean;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { useDropzone } = 'useDropzone' in ReactDropzone
    ? ReactDropzone
    // eslint-disable-next-line import/namespace
    : ReactDropzone['default'];

export const Dropzone: React.FC<DropzoneProps> = (props) => {
    const {
        className,
        label,
        onError,
        acceptTypes,
        disabled,
        isLoading
    } = props;

    const accept = useMemo(() => {
        const result: Accept = {};

        for (const type of acceptTypes) {
            const { key, extensions } = MIME_TYPES[type];

            if (key in result) {
                result[key] = [...(result[key] || []), ...extensions];
            }
            else {
                result[key] = extensions;
            }
        }

        return result;
    }, [acceptTypes]);

    const getErrorMessage = useCallback(
        (code: DropError) => {
            const errors: Partial<Record<DropError, Maybe<string>>> = {
                'file-invalid-type': `Тип файла не ${acceptTypes.join(' и не ')}`,
            };

            return errors[code] || 'Неизвестная ошибка';
        },
        [acceptTypes]
    );

    // eslint-disable-next-line consistent-return
    const handleDrop: DropzoneOptions['onDrop'] = ([acceptedFiles], [rejection]): void => {
        if (rejection) {
            const errors = rejection.errors.map(({ code }) => getErrorMessage(code));

            return onError(errors.join(', '));
        }

        if (acceptedFiles) {
            props.onDrop(acceptedFiles);
        }
    };

    const { getRootProps, getInputProps } = (useDropzone as UseDropzone)({
        accept,
        multiple: false,
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
    });

    return (
        <div className={classNames('flex justify-center items-center w-full', className)}>
            <label
                {...getRootProps()}
                className="hover:bg-bray-800 flex flex-col justify-center items-center w-full h-36 rounded-lg border-2 border-dashed cursor-pointer bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                <input {...getInputProps()} />
                {
                    isLoading
                        ? (
                            <div role="status">
                                <svg
                                    className="inline mr-2 w-10 h-10 text-gray-600 animate-spin fill-cyan-400"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg
                                    aria-hidden="true"
                                    className="mb-3 w-10 h-10 text-cyan-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-400">
                                    <span className="font-semibold">{label}</span>
                                </p>
                                <p className="text-xs text-gray-400">
                                    {acceptTypes.join(', ')}
                                </p>
                            </div>
                        )
                }
            </label>
        </div>
    );
};
