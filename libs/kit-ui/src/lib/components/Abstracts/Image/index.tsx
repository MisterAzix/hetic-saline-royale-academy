import { ImageProps as NexImageProps } from 'next/image';
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { Ratio } from '../Ratio';

import { Sizes, useSizesFromBreakpoints } from './math';
import clsx from 'clsx';
import { CldImage } from 'next-cloudinary';
import { getTheme } from '../../../../../styles/mixins';
import { COLORS } from '../../../../../styles/theme';

export type ImageProps = Omit<NexImageProps, 'src' | 'width' | 'height'> & {
  sizesFromBreakpoints?: Sizes;
  width: number;
  height: number;
  src: string;
  ratio?: string;
  hasPlaceholder?: boolean;
  imageClassName?: string;
  placeholderClassName?: string;
  screens?: Record<string, string>;
  style?: CSSProperties;
  fetchpriority?: 'high' | 'low';
};

function ImageForwarded(
  {
    sizes,
    sizesFromBreakpoints,
    className,
    imageClassName,
    hasPlaceholder = false,
    onLoadingComplete,
    ratio,
    onClick,
    placeholderClassName,
    screens,
    style,
    ...props
  }: ImageProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const processedSizes = useSizesFromBreakpoints(
    sizesFromBreakpoints ?? [],
    props.src,
    screens
  );

  const [loaded, setLoaded] = useState(false);

  const onLoadingCompleteCallback = useCallback(
    (img: HTMLImageElement) => {
      onLoadingComplete?.(img);

      hasPlaceholder && setLoaded?.(true);
    },
    [onLoadingComplete, setLoaded, hasPlaceholder]
  );

  const placeholderStyle: CSSProperties = {
    zIndex: 1,
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease-out',
    opacity: loaded ? 0 : 1,
    background: getTheme(COLORS, 'gray_300'),
  };

  const imageStyle: CSSProperties = {
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
  };

  const basicProps = {
    ref,
    className: clsx(className, { isLoaded: loaded }),
    onClick,
    style,
  };

  const renderChildren = (style: CSSProperties | null) => (
    <>
      {hasPlaceholder && (
        <span
          className={placeholderClassName ?? undefined}
          style={placeholderStyle}
        />
      )}

      <CldImage
        className={imageClassName}
        style={{ ...imageStyle, ...style } ?? undefined}
        sizes={processedSizes ? processedSizes : sizes ?? undefined}
        onLoadingComplete={onLoadingCompleteCallback}
        {...props}
      />
    </>
  );

  return props.src ? (
    ratio ? (
      <Ratio {...basicProps} ratio={ratio}>
        {renderChildren}
      </Ratio>
    ) : (
      <div {...basicProps}>{renderChildren(null)}</div>
    )
  ) : null;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(ImageForwarded);
