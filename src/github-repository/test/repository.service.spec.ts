import { HttpService } from '@nestjs/axios';
import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { of } from 'rxjs';
import { RedisCacheService } from '../../redis-cache/redis-cache.service';
import { RepositoryService } from '../repository.service';
import MockRepositories from './mock/mock-popular-repositories';
import { RepositoryQueryDTO } from '../dto/repository-query.dto';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register()],
      providers: [
        RepositoryService,
        {
          provide: RedisCacheService,
          useFactory: () => ({
            setCache: jest.fn(() => null),
            getCache: jest.fn(() => null),
          }),
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() => of({ data: MockRepositories, status: 200 })),
          },
        },
      ],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return popular repositories from github service', async () => {
    const query = plainToInstance(RepositoryQueryDTO, {
      createdFromDate: '2019-08-08',
    });
    const { total_count, incomplete_results, items } = await service.popular(
      query,
    );
    expect(total_count).toEqual(40);
    expect(incomplete_results).toEqual(false);
    expect(items.length).toEqual(1);
  });
});
