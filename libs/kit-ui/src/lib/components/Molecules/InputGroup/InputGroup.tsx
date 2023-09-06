import { ComponentProps } from 'react';
import { FormControl } from '@mui/base';
import { Label, Input, HelperText } from '../../Atoms';

type InputGroupProps = ComponentProps<typeof Input> & {
  label: string;
  defaultValue?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const InputGroup = ({
  name,
  label,
  defaultValue,
  helperText,
  error = false,
  required = false,
  disabled = false,
  icon,
  ...props
}: InputGroupProps) => (
  <FormControl
    defaultValue={defaultValue}
    error={error}
    required={required}
    disabled={disabled}
  >
    <Label>{label}</Label>
    <Input icon={icon} name={name} {...props} />
    {helperText && <HelperText>{helperText}</HelperText>}
  </FormControl>
);

export default InputGroup;
