import { Test, TestingModule } from '@nestjs/testing';
import { RoleuserController } from './roleuser.controller';
import { RoleuserService } from './roleuser.service';

// @ts-ignore
describe('RoleController', () => {
  let controller: RoleuserController;

  // @ts-ignore
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleuserController],
      providers: [RoleuserService],
    }).compile();

    controller = module.get<RoleuserController>(RoleuserController);
  });
// @ts-ignore
  it('should be defined', () => {
    // @ts-ignore
    expect(controller).toBeDefined();
  });
});
