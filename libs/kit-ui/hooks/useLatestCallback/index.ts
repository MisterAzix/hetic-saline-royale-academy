import { useLatest } from '../useLatest';
import { useCallback } from 'react';

export const useLatestCallback = <Params = unknown, ReturnType = unknown>(
  value: (params: Params) => ReturnType
) => {
  const latestValue = useLatest<typeof value>(value);

  return useCallback((params: Params) => {
    return latestValue.current?.(params);
  }, [latestValue]);
};
