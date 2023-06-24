import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

// @ts-ignore
describe('RoleController', () => {
  let controller: RoleController;

  // @ts-ignore
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService],
    }).compile();

    controller = module.get<RoleController>(RoleController);
  });
// @ts-ignore
  it('should be defined', () => {
    // @ts-ignore
    expect(controller).toBeDefined();
  });
});
