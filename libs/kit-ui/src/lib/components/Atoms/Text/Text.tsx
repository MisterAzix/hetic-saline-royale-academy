import { Typography } from '@mui/material';
import { TextPresets } from '../../../../../styles/@types';
import { ElementType, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type TextProps = {
  preset: TextPresets;
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

function Text({ css = '', preset, children, tag = 'p' }: TextProps) {
  return (
    <TextWrapper css={css}>
      <Typography variant={preset} component={tag}>
        {children}
      </Typography>
    </TextWrapper>
  );
}

export default Text;
