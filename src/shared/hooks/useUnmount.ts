import { useRef } from 'react';

import { useEffectOnce } from './useEffectOnce';

/**
 * React lifecycle hook that calls a function when the component will unmount.
 * @param {Function} fn - callback function.
 */
export const useUnmount = (fn: () => void | undefined): void => {
    const fnRef = useRef(fn);

    fnRef.current = fn;

    useEffectOnce(() => () => fnRef.current());
};
