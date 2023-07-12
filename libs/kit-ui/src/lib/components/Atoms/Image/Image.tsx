import { Image as AbstractImage } from '../../Abstracts/Image';
import type { ImageProps as AbstractImageProps } from '../../Abstracts/Image';
import { ClassNames, SerializedStyles } from '@emotion/react';
import { SCREENS } from '../../../styles/theme';
import { applyPercentRatio } from '../../../styles/mixins';

type ImageProps = Omit<AbstractImageProps, 'style' | 'ratio'> & {
  style: SerializedStyles;
  imageRatio: number;
} & AbstractImageProps;

function Image({ className, style, imageRatio, ...props }: ImageProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <AbstractImage
          fetchpriority={props.priority ? 'high' : 'low'}
          className={cx(
            css`
              position: relative;
              ${style}
            `
          )}
          ratio={cx(
            css({ paddingBottom: `${applyPercentRatio(imageRatio)};` })
          )}
          draggable={false}
          screens={SCREENS}
          {...props}
        />
      )}
    </ClassNames>
  );
}

export { Image };
