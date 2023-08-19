import canUseDom from '../../utils/can-use-dom';
import { useEffect, useLayoutEffect } from 'react';

/**
 * useLayoutEffect that does not show warning when server-side rendering
 * @param effect imperative function that can return a cleanup function
 * @param deps if present, effect will only activate if the values in the list change.
 * @example
 * ```tsx
 * import { useIsomorphicLayoutEffect } from '@unlikelystudio/react-hooks'
 *
 * const Demo = ({ value }) => {
 *   useIsomorphicLayoutEffect(() => {
 *     window.console.log(value)
 *   }, [value])
 *
 *   return null
 * }
 * ```
 */
export const useIsomorphicLayoutEffect = canUseDom
  ? useLayoutEffect
  : useEffect;
