import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class HasSpecialCharacterConstraint implements ValidatorConstraintInterface {

  validate(value: string) {
    return typeof value === 'string' && /[!@#$%^&*(),.?":{}|<>]/.test(value);
  }

  defaultMessage() {
    return 'Text ($value) must contain at least one special character';
  }
}

export function HasSpecialCharacter(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: HasSpecialCharacterConstraint,
    });
  };
}
