import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';
import { Role } from '@/api/role/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), RoleModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
