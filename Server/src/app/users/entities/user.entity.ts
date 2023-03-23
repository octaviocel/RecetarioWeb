import {
  Entity,
  BaseEntity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Role } from 'src/app/roles/entities/role.entity';
import { Exclude, Transform } from 'class-transformer';
import { Community } from 'src/app/communities/entities/community.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column({ type: 'date' })
  birth_date: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ default: false })
  verified: boolean;

  @Exclude()
  @Column({ select: false, nullable: true, length: 4 })
  code: string;

  @Exclude()
  @CreateDateColumn()
  createdAt: string;

  @Exclude()
  @UpdateDateColumn()
  updatedAt: string;

  @Transform(({ value }) => value.name || value)
  @ManyToOne(() => Role, (role) => role.users, { eager: true })
  @JoinColumn([{ name: 'role', referencedColumnName: 'name' }])
  role: Role;

  @ManyToMany(() => Community, (community) => community.users)
  @JoinTable()
  communities: Community[];

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
