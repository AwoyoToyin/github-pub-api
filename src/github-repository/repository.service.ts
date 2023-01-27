import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { SearchLimit, SearchOrder, SearchSort } from '../common';
import { RedisCacheService } from '../redis-cache/redis-cache.service';
import { RepositoryQueryDTO } from './dto/repository-query.dto';
import { RepositoryDTO } from './dto/repository.dto';
import { AxiosError } from 'axios';

@Injectable()
export class RepositoryService {
  @Inject()
  private httpService: HttpService;

  @Inject()
  private redisCacheService: RedisCacheService;

  private readonly logger = new Logger(RepositoryService.name);

  private cacheBaseKey = 'public_repositories';

  private cacheTTL = 60 * 60;

  async popular(queryDto: RepositoryQueryDTO): Promise<RepositoryDTO> {
    try {
      const query = await this.formatSearchParam(queryDto);

      const cached = await this.redisCacheService.getCache<RepositoryDTO>(
        this.getCacheKey(query),
      );

      if (cached) {
        this.logger.log('Cache: Found cached data matching query');
        return cached;
      }

      this.logger.log(`formatted query is: ${query}`);

      const { data } = await firstValueFrom(
        this.httpService
          .get<RepositoryDTO>(
            `https://api.github.com/search/repositories${query}`,
            {
              headers: {
                accept: 'application/vnd.github+json',
              },
            },
          )
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'Something went wrong';
            }),
          ),
      );

      this.cacheResult(query, data);

      return data;
    } catch (error) {
      this.logger.error(`Something went wrong error: ${error}`);
	  throw error;
    }
  }

  private cacheResult(query: string, data: RepositoryDTO) {
    void this.redisCacheService.setCache<RepositoryDTO>(
      this.getCacheKey(query),
      data,
      this.cacheTTL,
    );
  }

  private async formatSearchParam(
    queryDto: RepositoryQueryDTO,
  ): Promise<string> {
    const { language, createdFromDate, limit } = queryDto;

    let query = `created:>=${createdFromDate}`;
    if (language) query = `${query} language:${language}`;

    const filter = `&sort=${SearchSort.Stars}&order=${
      SearchOrder.DESC
    }&per_page=${limit ?? SearchLimit.TEN}`;

    return `?q=${encodeURIComponent(query.trim())}${filter}`;
  }

  private getCacheKey(query: string): string {
    return `${this.cacheBaseKey}-${query}`;
  }
}
