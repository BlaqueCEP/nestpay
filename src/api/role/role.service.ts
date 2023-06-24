import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '@/api/role/entities/role.entity';

@Injectable()
export class RoleService {
  @InjectRepository(Role)
  private readonly repository: Repository<Role>;
  create(createRoleDto: CreateRoleDto) {
    const role: Role = <Role>createRoleDto;

    return this.repository.save(role);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.repository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
