import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class HasNumberConstraint implements ValidatorConstraintInterface {

  validate(value: string) {
    return typeof value === 'string' && /\d/.test(value);
  }

  defaultMessage() {
    return 'Text ($value) must contain at least one number';
  }
}

export function HasNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: HasNumberConstraint,
    });
  };
}
