import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ApiModule } from './api/api.module';
import { RoleModule } from '@/api/role/role.module';
import { PermissionModule } from '@/api/permission/permission.module';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';
import { Rolepermission } from '@/api/rolepermissions/entities/rolepermission.entity';
import { Role } from '@/api/role/entities/role.entity';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
    RoleModule,
    RoleUser,
    Rolepermission,
    Role,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
