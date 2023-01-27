import { CacheModule, CacheStore, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ioRedisStore } from '@tirke/node-cache-manager-ioredis';
import { RedisCacheService } from './redis-cache.service';

export const REDIS_CACHE = 'REDIS_CACHE';

@Global()
@Module({
	imports: [
		CacheModule.registerAsync({
			isGlobal: true,
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				const store = (await ioRedisStore({
					host: configService.get<string>('REDIS_HOST'),
					port: +configService.get<number>('REDIS_PORT'),
				})) as unknown as CacheStore;

				return {
					store: {
						create: () => store,
					},
					ttl: 60 * 60 * 24 * 7,
				};
			},
		}),
	],
	providers: [RedisCacheService],
	exports: [RedisCacheService],
})
export class RedisCacheModule {}
