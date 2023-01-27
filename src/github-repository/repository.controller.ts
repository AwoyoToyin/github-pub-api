import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RepositoryQueryDTO } from './dto/repository-query.dto';
import { RepositoryDTO } from './dto/repository.dto';
import { RepositoryService } from './repository.service';

@ApiTags('Repositories')
@Controller('repositories')
export class RepositoryController {
  constructor(private readonly githubService: RepositoryService) { }

  @ApiResponse({ type: RepositoryDTO })
  @Get('/popular')
  async popular(@Query() query: RepositoryQueryDTO): Promise<RepositoryDTO> {
    return await this.githubService.popular(query);
  }
}
