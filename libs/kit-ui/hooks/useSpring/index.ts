import { useCallback, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Inrtia } from './inrtia';
import { useTicker } from '../useTicker';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

export type UseSpringParams = {
  config?: Partial<{
    friction: number;
    rigidity: number;
    interpolation: 'linear' | 'elastic' | 'bounce';
    perfectStop: boolean;
    precisionStop: number;
  }>;
  onUpdate: (
    currentValues: { x: number; y: number },
    prevValues: unknown
  ) => void;
} & Record<string, number | object | void>;

const defaultConfig = {
  friction: 50,
  rigidity: 0.15,
  interpolation: 'elastic',
  perfectStop: true,
  precisionStop: 0.001,
};

export const useSpring = ({
  config = {},
  onUpdate,
  ...initialValue
}: UseSpringParams): [
  (params: Omit<UseSpringParams, 'onUpdate'>) => void,
  () => void,
  () => void,
  unknown
] => {
  const [isRunning, setIsRunning] = useState(true);
  const inrtia = useRef(
    new Inrtia({
      value: initialValue,
      ...{ ...defaultConfig, ...config },
    })
  );

  const prevValue = useRef(initialValue);

  const onFrame = useCallback(
    (deltaTime: number) => {
      inrtia.current.update(Math.min(deltaTime, 64));
      onUpdate && onUpdate(inrtia.current.value, prevValue.current);
      prevValue.current = { ...inrtia.current.value };
    },
    [onUpdate]
  );

  useTicker(onFrame, !isRunning);

  useIsomorphicLayoutEffect(() => {
    return () => {
      inrtia.current.stop();
    };
  }, []);

  const set = useCallback(
    ({ config, ...value }: Omit<UseSpringParams, 'onUpdate'>) => {
      if (config) {
        // const { ...interpolationParams } = config as UseSpringParams['config'];

        inrtia.current.interpolationParams = {
          ...inrtia.current.interpolationParams,
          // ...interpolationParams,
        };

        // if (interpolationParams?.precisionStop)
        //   inrtia.current.precisionStop = interpolationParams.precisionStop;
        // if (interpolationParams?.perfectStop)
        //   inrtia.current.perfectStop = interpolationParams.perfectStop;
      }
      inrtia.current.to(value);
    },
    []
  );
  const stop = useCallback(() => setIsRunning(false), []);
  const start = useCallback(() => setIsRunning(true), []);

  return [set, stop, start, inrtia];
};
