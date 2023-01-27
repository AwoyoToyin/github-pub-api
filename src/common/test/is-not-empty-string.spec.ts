import { Validator } from 'class-validator';
import { IsNotEmptyString } from '../decorators';

class TestDto {
	@IsNotEmptyString()
	property: string;
}

describe('IsNotEmptyString', () => {
	const validator = new Validator();
	const testDto = new TestDto();

	it('throws for undefined value', async () => {
		await validator.validate(testDto).then((errors) => {
			expect(errors.length).toEqual(1);
			expect(errors[0].target).toEqual(testDto);
			expect(errors[0].constraints.isNotEmptyString).toEqual(
				'property can not be an empty string',
			);
		});
	});

	it('throws for empty value', async () => {
		testDto.property = '';
		await validator.validate(testDto).then((errors) => {
			expect(errors.length).toEqual(1);
			expect(errors[0].target).toEqual(testDto);
			expect(errors[0].constraints.isNotEmptyString).toEqual(
				'property can not be an empty string',
			);
		});
	});

	it('does not throw for valid value', async () => {
		testDto.property = 'valid';
		await validator.validate(testDto).then((errors) => {
			expect(errors.length).toEqual(0);
		});
	});
});
