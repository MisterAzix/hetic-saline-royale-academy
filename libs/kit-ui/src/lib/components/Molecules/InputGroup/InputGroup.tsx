import { ComponentProps } from 'react';
import { FormControl } from '@mui/base';
import { Label, Input, HelperText } from '../../Atoms';

type InputGroupProps = ComponentProps<typeof Input> & {
  label: string;
  defaultValue?: string;
  helperText: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
};

const InputGroup = ({
  name,
  label,
  defaultValue,
  helperText,
  error = false,
  required = false,
  disabled = false,
  ...props
}: InputGroupProps) => (
  <FormControl
    defaultValue={defaultValue}
    error={error}
    required={required}
    disabled={disabled}
  >
    <Label>{label}</Label>
    <Input name={name} {...props} />
    <HelperText>{helperText}</HelperText>
  </FormControl>
);

export default InputGroup;
