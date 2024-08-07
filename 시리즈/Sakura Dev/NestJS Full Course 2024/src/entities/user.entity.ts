import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  BeforeInsert,
} from 'typeorm';
import { Property } from './property.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  avatarUrl?: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  password: string;

  @OneToMany(() => Property, (property) => property.user, { cascade: true })
  properties: Property[];

  @ManyToMany(() => Property, (property) => property.likedBy)
  @JoinTable({ name: 'user_liked_properties' })
  likedProperties: Property[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
