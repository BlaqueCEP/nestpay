import { Module } from '@nestjs/common';
import { RoleuserService } from './roleuser.service';
import { RoleuserController } from './roleuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';
import { Role } from '@/api/role/entities/role.entity';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleUser]), RoleuserModule],
  controllers: [RoleuserController],
  providers: [RoleuserService],
})
export class RoleuserModule {}
