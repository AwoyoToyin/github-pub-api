import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber } from 'class-validator';
import { RepositoryItemDTO } from './repository-item.dto';

export class RepositoryDTO {
  @ApiProperty({
    required: true,
    description: 'Required. Total number of matching results',
  })
  @IsNumber()
  total_count: number;

  @ApiProperty({
    required: true,
    description: 'Required',
  })
  @IsBoolean()
  incomplete_results: boolean;

  @ApiProperty({
    required: true,
    description: 'Required. Repo Search Result Items',
    type: [RepositoryItemDTO],
  })
  @IsArray()
  items: RepositoryItemDTO[];
}
