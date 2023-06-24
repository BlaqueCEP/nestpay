import { Module } from '@nestjs/common';
import { RolepermissionsService } from './rolepermissions.service';
import { RolepermissionsController } from './rolepermissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';
import { Rolepermission } from '@/api/rolepermissions/entities/rolepermission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleUser, Rolepermission]),
    RolepermissionsModule,
  ],
  controllers: [RolepermissionsController],
  providers: [RolepermissionsService],
})
export class RolepermissionsModule {}
