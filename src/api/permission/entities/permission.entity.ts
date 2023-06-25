import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rolepermission } from '@/api/rolepermissions/entities/rolepermission.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public name!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @OneToMany(() => Rolepermission, (rolepermission) => rolepermission.role)
  public rolepermissions: Rolepermission[];
}
