import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public name!: string;

  @Column({ type: 'varchar' })
  public description!: string;
}
