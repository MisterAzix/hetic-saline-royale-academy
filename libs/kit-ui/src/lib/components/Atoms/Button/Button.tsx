import { Button, buttonClasses } from '@mui/base';
import styled from 'styled-components';
import { palette } from '../../../palette';
import { typography } from '../../../typography';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const _Button = styled(Button)<{ size?: ButtonSize }>`
  background-color: ${palette.primary[600]};
  border-radius: 8px;
  color: ${palette.white};
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 30px ${palette.gray[100]};

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return `
          ${typography.xs.semiBold};
          padding: 8px 14px;
        `;
      case 'sm':
        return `
          ${typography.sm.semiBold};
          padding: 10px 16px;
        `;
      case 'md':
        return `
          ${typography.md.semiBold};
          padding: 10px 18px;
        `;
      case 'lg':
        return `
          ${typography.lg.semiBold};
          padding: 12px 20px;
        `;
      case 'xl':
        return `
          ${typography.xl.semiBold};
          padding: 16px 28px;
        `;
      default:
        return `
          ${typography.sm.semiBold};
          padding: 10px 16px;
        `;
    }
  }}

  &:hover {
    background-color: ${palette.primary[700]};
  }

  &.${buttonClasses.active}, &.${buttonClasses.focusVisible} {
    background-color: ${palette.primary[600]};
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px ${palette.primary[100]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default _Button;
