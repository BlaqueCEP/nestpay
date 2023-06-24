import { Injectable } from '@nestjs/common';
import { CreateRoleuserDto } from './dto/create-roleuser.dto';
import { UpdateRoleuserDto } from './dto/update-roleuser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';

@Injectable()
export class RoleuserService {
  @InjectRepository(RoleUser)
  private readonly repository: Repository<RoleUser>;
  create(createRoleDto: CreateRoleuserDto) {
    const roleuser: RoleUser = <RoleUser>createRoleDto;

    return this.repository.save(roleuser);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id).then((res) => {
      if (!res) {
        return { data: null, message: 'Role User not found', status: 404 };
      } else {
        return res;
      }
    });
  }

  update(id: number, updateRoleDto: UpdateRoleuserDto) {
    return this.repository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
