import { Typography } from '@mui/material';
import { Colors, TextPresets } from '../../../styles/@types';
import { ElementType, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type TextProps = {
  preset: TextPresets;
  color?: Colors;
  css?: string;
  tag?: ElementType;
} & PropsWithChildren;

const dynamicStyle = ({ css: style }: { css: string }) =>
  css`
    ${style}
  `;

const TextWrapper = styled.div<{ css: string }>`
  ${dynamicStyle}
`;

function Text({ css = '', preset, color, children, tag = 'p' }: TextProps) {
  // TODO : FIX HOVER ERROR THAT DONT WORK
  return (
    <TextWrapper css={css}>
      <Typography
        sx={{
          color: `${color ?? 'white'}.main`,
        }}
        variant={preset}
        component={tag}
      >
        {children}
      </Typography>
    </TextWrapper>
  );
}

export default Text;
