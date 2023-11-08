import { Test, TestingModule } from '@nestjs/testing';
import { OrganizadoresService } from './organizadores.service';

describe('OrganizadoresService', () => {
  let service: OrganizadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizadoresService],
    }).compile();

    service = module.get<OrganizadoresService>(OrganizadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
