import { useState } from 'react';
import canUseDom from '../../utils/can-use-dom';
import { useOnResize } from '../useOnResize';

export type WindowSize = {
  width: number;
  height: number;
};

const width = canUseDom && window.innerWidth;
const height = canUseDom && window.innerHeight;

export function useWindowSize(defaultWindowSize?: Partial<WindowSize>) {
  const [windowSize, setWindowSize] = useState({
    width,
    height,
    ...defaultWindowSize,
  });

  useOnResize((windowSize) => {
    setWindowSize(windowSize);
  });

  return windowSize;
}
