import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public email!: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public phone!: string;

  @Column({ type: 'varchar' })
  public avatar!: string;

  @Column({ type: 'varchar' })
  public gender!: string;

  @Column({ type: 'boolean', default: false })
  public status!: boolean;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar', nullable: true })
  public name: string | null;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  @OneToMany(() => RoleUser, (roleuser) => roleuser.user)
  public roleusers: RoleUser[];
}
