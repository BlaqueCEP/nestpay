import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';
import { Rolepermission } from '@/api/rolepermissions/entities/rolepermission.entity';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public name!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @OneToMany(() => RoleUser, roleuser => roleuser.user)
  public roleusers: RoleUser[];

  @OneToMany(() => Rolepermission, rolepermission => rolepermission.permission)
  public rolepermissions: Rolepermission[];
}
