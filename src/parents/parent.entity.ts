import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  Index,
  JoinTable,
} from 'typeorm';
import { BabyEntity } from '../babies/baby.entity';

@Entity()
export class ParentEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ type: 'date' })
  dateOfBirth!: string;

  @Index()
  @Column()
  email!: string;

  @Column()
  password!: string;

  @ManyToMany(() => BabyEntity, (baby) => baby.parents)
  @JoinTable()
  children!: BabyEntity[];
}
