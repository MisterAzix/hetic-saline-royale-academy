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

const SomeComp = styled.div<{ css: string }>`
  ${dynamicStyle}
`;

function Text({ css = '', preset, children, tag = 'p' }: TextProps) {
  return (
    <SomeComp css={css}>
      <Typography variant={preset} component={tag}>
        {children}
      </Typography>
    </SomeComp>
  );
}

export default Text;
