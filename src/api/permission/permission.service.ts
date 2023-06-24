import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Permission } from '@/api/permission/entities/permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {
  @InjectRepository(Permission)
  private readonly repository: Repository<Permission>;
  create(createPermissionDto: CreatePermissionDto) {
    console.log(createPermissionDto);
    const permission: Permission = <Permission>createPermissionDto;

    return this.repository.save(permission);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.repository.update(id, updatePermissionDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
