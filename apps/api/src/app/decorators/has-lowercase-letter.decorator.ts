import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class HasLowercaseConstraint implements ValidatorConstraintInterface {

  validate(value: string) {
    return typeof value === 'string' && /[a-z]/.test(value);
  }

  defaultMessage() {
    return 'Text ($value) must contain at least one lowercase letter';
  }
}

export function HasLowercase(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: HasLowercaseConstraint,
    });
  };
}
