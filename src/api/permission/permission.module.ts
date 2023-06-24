import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '@/api/permission/entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permission]), PermissionModule],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
