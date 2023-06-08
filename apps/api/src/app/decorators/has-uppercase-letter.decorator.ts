import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsUppercaseConstraint implements ValidatorConstraintInterface {

  validate(value: string) {
    return typeof value === 'string' && /[A-Z]/.test(value);
  }

  defaultMessage() {
    return 'Text ($value) must contain at least one uppercase letter';
  }
}

export function HasUppercaseLetter(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUppercaseConstraint,
    });
  };
}