import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

import { User } from 'src/app/users/entities/user.entity';

@Entity('communities')
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true, type: 'text' })
  description: string;

  @ManyToMany(() => User, (user) => user.communities)
  users: User[];

  constructor(partial: Partial<Community>) {
    super();
    Object.assign(this, partial);
  }
}
