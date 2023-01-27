import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
	constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) { }

	protected readonly logger = new Logger(RedisCacheService.name);

	async setCache<T>(key: string, data: T, ttl?: number): Promise<T> {
		try {
			await this.cacheService.set(key, data, ttl);
			return await this.cacheService.get<T>(key);
		} catch (error) {
			this.logger.error(`Cache: Error setting data in cache (key: ${key})`);
			throw error;
		}
	}

	async getCache<T>(key: string): Promise<T | undefined> {
		try {
			return this.cacheService.get<T>(key);
		} catch (error) {
			this.logger.error(`Cache: Error getting data from cache (key: ${key})`);
			throw error;
		}
	}
}
