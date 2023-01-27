import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class RepositoryLicenseDTO {
    @ApiProperty({
        required: true,
    })
    @IsString()
    key: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    spdx_id: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    node_id: string;

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    html_url?: string;
}
