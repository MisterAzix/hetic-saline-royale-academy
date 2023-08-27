import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { MutableRefObject, useRef } from 'react';

export function useIsMounted(): MutableRefObject<boolean> {
  const isMountedRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}
