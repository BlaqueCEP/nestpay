import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthModule } from './auth/auth.module';
import { Role } from '@/api/role/entities/role.entity';
import { RoleService } from '@/api/role/role.service';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, RoleUser]), AuthModule],
  controllers: [UserController],
  providers: [UserService, RoleService],
})
export class UserModule {}
