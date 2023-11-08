import { Test, TestingModule } from '@nestjs/testing';
import { OrganizadoresController } from './organizadores.controller';
import { OrganizadoresService } from './organizadores.service';

describe('OrganizadoresController', () => {
  let controller: OrganizadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizadoresController],
      providers: [OrganizadoresService],
    }).compile();

    controller = module.get<OrganizadoresController>(OrganizadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
