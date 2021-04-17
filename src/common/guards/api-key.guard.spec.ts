import { ApiKeyGuard } from './api-key.guard';
import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('ApiKeyGuard', () => {
  let reflector: Reflector;
  let configService: ConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
    }).compile();

    reflector = module.get<Reflector>(Reflector);
    configService = module.get<ConfigService>(ConfigService);
  });
  it('should be defined', () => {
    expect(new ApiKeyGuard(reflector, configService)).toBeDefined();
  });
});
