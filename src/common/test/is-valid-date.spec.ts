import { Validator } from 'class-validator';
import { IsValidDate } from '../decorators';

class TestDto {
  @IsValidDate()
  property: string;
}

describe('IsValidDate', () => {
  const validator = new Validator();
  const testDto = new TestDto();

  it('throws for undefined value', async () => {
    await validator.validate(testDto).then((errors) => {
      expect(errors.length).toEqual(1);
      expect(errors[0].target).toEqual(testDto);
      expect(errors[0].constraints.isValidDate).toEqual(
        'property must be a valid date and in the format: yyyy-mm-dd',
      );
    });
  });

  it('throws for empty value', async () => {
    testDto.property = '';
    await validator.validate(testDto).then((errors) => {
      expect(errors.length).toEqual(1);
      expect(errors[0].target).toEqual(testDto);
      expect(errors[0].constraints.isValidDate).toEqual(
        'property must be a valid date and in the format: yyyy-mm-dd',
      );
    });
  });

  it('throws for an invalid value', async () => {
    testDto.property = '29-11-2022';
    await validator.validate(testDto).then((errors) => {
      expect(errors.length).toEqual(1);
      expect(errors[0].target).toEqual(testDto);
      expect(errors[0].constraints.isValidDate).toEqual(
        'property must be a valid date and in the format: yyyy-mm-dd',
      );
    });
  });

  it('does not throw for valid value', async () => {
    testDto.property = '2022-11-29';
    await validator.validate(testDto).then((errors) => {
      expect(errors.length).toEqual(0);
    });
  });
});
