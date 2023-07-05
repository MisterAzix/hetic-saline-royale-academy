import { useMemo } from 'react';
import { ImageProps } from './index';
import {Breakpoint} from '../../../../../styles/@types'

export type Size = {
  breakpoint?: Breakpoint | number ;
  ratio: number;
};

export type Sizes = Size[];

export function vw(ratio: number) {
  return `${Math.floor(ratio * 100)}vw`;
}

export function vwWithMaxWidth(ratio: number, bp?: string) {
  return ratio
    ? `${bp ? `(min-width: ${bp}) ${vw(ratio)}` : `${vw(ratio)}`}`
    : '';
}

export function useSizesFromBreakpoints(
  sizesFromBreakpoints: Sizes,
  src: ImageProps['src'],
  screens: ImageProps['screens']
) {
  console.log(screens)
  const processedSizes = useMemo(() => {
    let processed;
    if (sizesFromBreakpoints?.length > 0) {
      const baseSize = sizesFromBreakpoints.find((size) => !size.breakpoint);
      if (!baseSize) {
        console.warn(
          `[Image] you didn't specify a main size without breakpoint for ${src}`
        );
      }

      processed = sizesFromBreakpoints.reduce(
        (acc, { breakpoint, ratio }, index) => {
          let processedBreakpoint;
          // Breakpoint string from theme like 'md' or 'lg'
          if (
            breakpoint &&
            typeof breakpoint === 'string' &&
            screens?.[breakpoint]
          )
            processedBreakpoint = screens[breakpoint];
          // Breakpoint number like 1400
          else if (breakpoint && typeof breakpoint === 'number')
            processedBreakpoint = `${breakpoint}px`;

          return (
            acc +
            vwWithMaxWidth(ratio, processedBreakpoint) +
            (index !== sizesFromBreakpoints?.length - 1 ? ', ' : '')
          );
        },
        ''
      );
    }

    return processed;
  }, [sizesFromBreakpoints, screens, src]);

  return processedSizes;
}
