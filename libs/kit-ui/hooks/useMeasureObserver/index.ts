import { RefObject, useState } from 'react';
import canUseDom from '../../utils/can-use-dom';
import { useIsMounted } from '../useIsMounted';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { createNanoEvents, Emitter } from 'nanoevents';
import { useWindowSize } from '../useWindowSize';

export type Rect = {
  width: number;
  height: number;
};

const emitter = createNanoEvents();
const observer =
  canUseDom &&
  new ResizeObserver((entries) => {
    emitter.emit('resize', entries);
  });

type RefMeasureObserver = RefObject<HTMLElement> | undefined;

export function useMeasureObserver(
  ref: RefMeasureObserver,
  method?: 'borderBoxSize'
): Rect;
export function useMeasureObserver(
  ref: RefMeasureObserver,
  method?: 'getBoundingClientRect'
): DOMRect;
export function useMeasureObserver(
  ref: RefMeasureObserver,
  method?: 'borderBoxSize' | 'getBoundingClientRect'
): DOMRect | Rect {
  const isMounted = useIsMounted();
  const [rect, setRect] = useState<DOMRect | Rect>(
    method === 'borderBoxSize'
      ? {
          width: 0,
          height: 0,
        }
      : {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          x: 0,
          y: 0,
        }
  );

  useIsomorphicLayoutEffect(() => {
    let unbind: ReturnType<Emitter['on']>;
    if (ref?.current && observer) {
      observer.observe(ref?.current, { box: 'border-box' });
      unbind = emitter.on('resize', (entries: ResizeObserverEntry[]) => {
        if (!isMounted.current) return;

        entries.forEach((entry) => {
          if (entry.target === ref.current) {
            const borderBoxHeight = entry?.borderBoxSize?.[0]?.blockSize;
            const borderBoxWidth = entry?.borderBoxSize?.[0]?.inlineSize;

            //TODO: ENELVER CHANGEMENT HERE
            let rect: Omit<DOMRect, 'toJSON'> = {
              height: 0,
              width: 0,
              x: 0,
              y: 0,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            };

            if (
              method === 'getBoundingClientRect' ||
              !borderBoxHeight ||
              !borderBoxWidth
            ) {
              rect = entry.target.getBoundingClientRect();
            }
            setRect({
              width: borderBoxWidth ?? rect.width,
              height: borderBoxHeight ?? rect.height,
              ...(method === 'getBoundingClientRect'
                ? {
                    bottom: rect.bottom,
                    top: rect.top,
                    left: rect.left,
                    right: rect.right,
                    x: rect.x,
                    y: rect.y,
                  }
                : {}),
            });
          }
        });
      });
    }
    return () => {
      unbind?.();
      if (ref?.current && observer) {
        observer.unobserve(ref?.current);
      }
    };
  }, [ref?.current]);

  const windowSize = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    if (ref?.current && method === 'getBoundingClientRect') {
      const newRect = ref.current.getBoundingClientRect();
      setRect({
        width: newRect.width,
        height: newRect.height,
        bottom: newRect.bottom,
        top: newRect.top,
        left: newRect.left,
        right: newRect.right,
        x: newRect.x,
        y: newRect.y,
      });
    }
  }, [windowSize]);

  return rect;
}
