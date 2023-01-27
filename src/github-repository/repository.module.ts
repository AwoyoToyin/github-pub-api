import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';

@Module({
	imports: [
		HttpModule.register({
			// timeout: 800,
			maxRedirects: 0,
		}),
	],
  controllers: [RepositoryController],
  providers: [RepositoryService]
})
export class RepositoryModule {}
