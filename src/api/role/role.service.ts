import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { Role } from '@/api/role/entities/role.entity';
import { User } from '@/api/user/user.entity';
import { Permission } from '@/api/permission/entities/permission.entity';
import { Rolepermission } from '@/api/rolepermissions/entities/rolepermission.entity';

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

  async findOne(id: number) {

    //write a query to join roles with rolepermissions and permissions
    // const role = await this.repository.findOne(id);
    return await this.repository.findOne(id, {
      relations: ['rolepermissions'],
    });

    // return await createQueryBuilder('role')
    //   .leftJoinAndSelect(
    //     Rolepermission,
    //     'rolepermission',
    //     'rolepermission.roleId = role.id',
    //   )
    //   .getMany();

    // return await createQueryBuilder('role')
    //   .leftJoinAndSelect('rolepermissions', 'rolepermission.roleId = role.id')
    //   .where('id = :id', { id })
    //   .getOne();

    // this.repository.findOne(id).then(async (res) => {
    //   if (!res) {
    // return await this.repository.findOne({
    //   where: { id: id },
    //   relations: [
    //     'rolepermissions',
    //     'rolepermissions.permission',
    //     // 'roleusers.role.rolepermissions',
    //     // 'rolepermissions.permission',
    //     //   'roleusers.role.rolepermissions',
    //     //   'roleusers.role.rolepermissions.permission',
    //   ],
    // });
    // return { data: null, message: 'Role not found', status: 404 };
    // } else {
    //   return res;
    // }
    // });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.repository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
