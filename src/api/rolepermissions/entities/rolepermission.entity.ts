import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '@/api/role/entities/role.entity';
import { Permission } from '@/api/permission/entities/permission.entity';
@Entity()
export class Rolepermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Role, (role) => role.roleusers)
  role: Role;

  @ManyToOne((type) => Permission, (permission) => permission.rolepermissions)
  permission: Permission;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
