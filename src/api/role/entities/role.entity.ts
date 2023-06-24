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
  // @OneToMany((type) => RoleUser, (roleuser) => roleuser.user, {
  //   cascade: ['insert', 'update'],
  // })
  // roleusers: RoleUser[];
}
