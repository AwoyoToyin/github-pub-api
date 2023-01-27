import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class RepositoryUserDTO {
  @ApiProperty({
    required: true,
  })
  @IsString()
  login: string;

  @ApiProperty({
    required: true,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  node_id: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  avatar_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  gravatar_id: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  html_url: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  followers_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  following_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  gists_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  starred_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  subscriptions_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  organizations_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  repos_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  events_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  received_events_url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  type: string;

  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  site_admin: boolean;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsDate()
  starred_at?: string;
}
