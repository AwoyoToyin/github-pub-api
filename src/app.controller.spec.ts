import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('getHealth', () => {
    it('should return health status', () => {
      const appController = app.get(AppController);
      const response = appController.getHealth();
      expect(response.status).toBe('ok');
    });
  });
});
