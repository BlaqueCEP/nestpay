import { PartialType } from '@nestjs/mapped-types';
import { CreateRolepermissionDto } from './create-rolepermission.dto';

export class UpdateRolepermissionDto extends PartialType(
  CreateRolepermissionDto,
) {}
