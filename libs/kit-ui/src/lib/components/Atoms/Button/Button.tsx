import { Button, buttonClasses } from '@mui/base';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { palette } from '../../../palette';
import { typography } from '../../../typography';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonColor = 'primary' | 'secondary' | 'destructive';

const _Button = styled(Button)<{ size?: ButtonSize; color?: ButtonColor }>`
  position: relative;

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          ${typography.xs.semiBold};
          padding: 8px 14px;
        `;
      case 'sm':
        return css`
          ${typography.sm.semiBold};
          padding: 10px 16px;
        `;
      case 'md':
        return css`
          ${typography.md.semiBold};
          padding: 10px 18px;
        `;
      case 'lg':
        return css`
          ${typography.lg.semiBold};
          padding: 12px 20px;
        `;
      case 'xl':
        return css`
          ${typography.xl.semiBold};
          padding: 16px 28px;
        `;
      default:
        return css`
          ${typography.sm.semiBold};
          padding: 10px 16px;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case 'primary':
      default:
        return css`
          background-color: ${palette.primary[600]};
          border: 1px solid ${palette.primary[600]};
          color: ${palette.white};

          &:hover {
            background-color: ${palette.primary[700]};
            border: 1px solid ${palette.primary[700]};
          }

          &.${buttonClasses.active}, &.${buttonClasses.focusVisible} {
            background-color: ${palette.primary[600]};
            border: 1px solid ${palette.primary[600]};
            box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
              0 0 0 4px ${palette.primary[100]};
            outline: none;
          }
        `;
      case 'secondary':
        return css`
          background-color: ${palette.white};
          border: 1px solid ${palette.gray[300]};
          color: ${palette.gray[700]};

          &:hover {
            background-color: ${palette.gray[50]};
            color: ${palette.gray[800]};
          }

          &.${buttonClasses.active}, &.${buttonClasses.focusVisible} {
            background-color: ${palette.white};
            box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
              0 0 0 4px ${palette.gray[100]};
            color: ${palette.gray[700]};
            outline: none;
          }
        `;
      case 'destructive':
        return css`
          background-color: ${palette.error[600]};
          border: 1px solid ${palette.error[600]};
          color: ${palette.white};

          &:hover {
            background-color: ${palette.error[700]};
            border: 1px solid ${palette.error[700]};
          }

          &.${buttonClasses.active}, &.${buttonClasses.focusVisible} {
            background-color: ${palette.error[600]};
            border: 1px solid ${palette.error[600]};
            box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05),
              0 0 0 4px ${palette.error[100]};
            outline: none;
          }
        `;
    }
  }}

  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;

  &.${buttonClasses.active}, &.${buttonClasses.focusVisible} {
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default _Button;
