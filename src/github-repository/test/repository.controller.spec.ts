import { plainToInstance } from 'class-transformer';
import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryController } from '../repository.controller';
import { RepositoryService } from '../repository.service';
import MockRepositories from './mock/mock-popular-repositories';
import { RepositoryQueryDTO } from '../dto/repository-query.dto';

describe('RepositoryController', () => {
  let controller: RepositoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryController],
      providers: [
        {
          provide: RepositoryService,
          useFactory: () => ({
            popular: jest.fn(async () => {
              return await MockRepositories;
            }),
          }),
        },
      ],
    }).compile();

    controller = module.get<RepositoryController>(RepositoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all repositories matching the query parameters', async () => {
    const query = plainToInstance(RepositoryQueryDTO, {
      createdFromDate: '2019-08-08',
    });
    const { total_count, incomplete_results, items } = await controller.popular(
      query,
    );
    expect(total_count).toEqual(40);
    expect(incomplete_results).toEqual(false);
    expect(items.length).toEqual(1);
  });
});
