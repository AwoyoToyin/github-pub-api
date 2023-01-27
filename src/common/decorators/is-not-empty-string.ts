import {
  isNotEmpty,
  isString,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsNotEmptyString(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isNotEmptyString',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate: (value: any) => isString(value) && isNotEmpty(value.trim()),
        defaultMessage: (validationArguments?) =>
          `${validationArguments.property} can not be an empty string`,
      },
    });
  };
}
