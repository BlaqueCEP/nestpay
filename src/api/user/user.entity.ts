import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../role/entities/role.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar' })
  public phone!: string;

  @Column({ type: 'varchar' })
  public avatar!: string;

  @Column({ type: 'varchar' })
  public gender!: string;

  @Column({ type: 'boolean' })
  public status!: boolean;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar', nullable: true })
  public name: string | null;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  @ManyToMany(() => Role)
  @JoinTable()
  categories: Role[];
}
