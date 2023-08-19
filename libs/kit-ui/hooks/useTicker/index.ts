/**
 * Equivalent to requestAnimationFrame
 * @param callback function to trigger on each frame
 * @param pause if true, the callback function will not be executed
 *
 * @example
 * ```tsx
 * import { useTicker } from '@unlikelystudio/react-hooks'
 *
 * const Demo = () => {
 *   useTicker((dTime) => {
 *     console.log('UPDATE', dTime)
 *   })
 *
 *   return null
 * }
 * ```
 */
import { useLatestCallback } from '../useLatestCallback';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { raf } from 'rafz';
import { raiseError } from '../../utils';

type UseTickerParams = {
  callback: (delta: number) => void;
  pause: boolean;
};

export const useTicker = (
  callback: UseTickerParams['callback'],
  pause: UseTickerParams['pause']
) => {
  if (!callback) raiseError('Please provide a callback to useTicker hook.');

  const updateCallback = useLatestCallback(callback);

  useIsomorphicLayoutEffect(() => {
    let shouldUpdate = true;

    const onUpdate = (deltaTime: number) => {
      updateCallback(deltaTime);
      return shouldUpdate;
    };

    if (!pause) {
      raf(onUpdate);
    }

    return () => {
      shouldUpdate = false;
      raf.cancel(onUpdate);
    };
  }, [callback, pause]);
};
