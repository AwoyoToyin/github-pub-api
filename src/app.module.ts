import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config, validate } from './config';
import { RepositoryModule } from './github-repository/repository.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validate,
			load: [config],
		}),
		LoggerModule.forRoot({
			pinoHttp: {
				transport: process.env.NODE_ENV === 'development' && {
					target: 'pino-pretty',
					options: {
						singleLine: true,
					},
				},
			},
		}),
		RedisCacheModule,
		RepositoryModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
