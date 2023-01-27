import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsNotEmptyString, IsValidDate } from '../../common';

export class RepositoryQueryDTO {
  @ApiProperty({
    required: true,
    description:
      'Required. The most popular repositories created from this day. Example: 2022-01-01',
  })
  @IsNotEmptyString()
  @IsValidDate()
  createdFromDate: string;

  @ApiProperty({
    required: false,
    description: 'Optional. Filter for a programming language',
  })
  @IsOptional()
  language: string;

  @ApiProperty({
    required: false,
    description:
      'Optional. An option to limit the result set. Try 10, 50 or 100. Default is set to 10',
  })
  @IsOptional()
  @IsString()
  limit?: string;
}
