import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { RoleuserModule } from '@/api/roleuser/roleuser.module';

@Module({
  imports: [UserModule, PermissionModule, RoleuserModule],
  providers: [],
})
export class ApiModule {}
