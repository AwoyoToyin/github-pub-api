import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidDate(validationOptions?: ValidationOptions) {
	return function (object: unknown, propertyName: string) {
		registerDecorator({
			name: 'isValidDate',
			target: object.constructor,
			propertyName,
			options: validationOptions,
			validator: {
				validate: (value: any) => {
					const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
					return value && value.match(regex) !== null;
				},
				defaultMessage: (validationArguments?) =>
					`${validationArguments.property} must be a valid date and in the format: yyyy-mm-dd`,
			},
		});
	};
}
