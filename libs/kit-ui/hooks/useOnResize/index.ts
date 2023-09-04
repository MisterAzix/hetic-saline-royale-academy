import { raf } from 'rafz';
import canUseDom from '../../utils/can-use-dom';
import { useIsMounted } from '../useIsMounted';
import { useLatestCallback } from '../useLatestCallback';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { WindowSize } from '../useWindowSize';
import { createNanoEvents } from 'nanoevents';

const emitter = createNanoEvents();

let width = canUseDom && window.innerWidth;
let height = canUseDom && window.innerHeight;
function onResize() {
  raf(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    emitter.emit('resize', {
      width,
      height,
    });
  });
}

if (canUseDom) {
  window.addEventListener('resize', onResize, { passive: true });
}

export function useOnResize(callback: (windowSize: WindowSize) => void) {
  const isMounted = useIsMounted();

  const onResizeCallback = useLatestCallback((windowSize: WindowSize) => {
    if (isMounted.current) {
      callback(windowSize);
    }
  });

  useIsomorphicLayoutEffect(() => {
    const unbind = emitter.on('resize', onResizeCallback);
    //TODO : ENLEVER CHANGEMENT HERE
    width && height && onResizeCallback({ width, height });

    return () => {
      unbind();
    };
  }, []);
}
