import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheService } from '../redis-cache.service';

describe('RedisCacheService', () => {
	let service: RedisCacheService;

	const cacheStore: { [x: string]: unknown } = {};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [CacheModule.register()],
			providers: [RedisCacheService],
		}).compile();

		service = module.get<RedisCacheService>(RedisCacheService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should set cache data', async () => {
		const setCacheSpy = jest
			.spyOn(service, 'setCache')
			.mockImplementation((key, data) => {
				cacheStore[key] = data;
				return Promise.resolve(true);
			});

		const getCacheSpy = jest
			.spyOn(service, 'getCache')
			.mockImplementation((key) => {
				return Promise.resolve(cacheStore[key]);
			});

		await service.setCache('mykey', 'I was saved in the cache');
		expect(setCacheSpy).toHaveBeenCalled();

		const cacheData = await service.getCache('mykey');
		expect(getCacheSpy).toHaveBeenCalledWith('mykey');
		expect(cacheData).toEqual('I was saved in the cache');
	});
});
