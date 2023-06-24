import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleuserService } from './roleuser.service';
import { CreateRoleuserDto } from './dto/create-roleuser.dto';
import { UpdateRoleuserDto } from './dto/update-roleuser.dto';

@Controller('roleuser')
export class RoleuserController {
  constructor(private readonly roleUserService: RoleuserService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleuserDto) {
    return this.roleUserService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleuserDto) {
    return this.roleUserService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleUserService.remove(+id);
  }
}
