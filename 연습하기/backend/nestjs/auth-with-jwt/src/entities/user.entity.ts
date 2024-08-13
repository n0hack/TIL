import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as argon2 from 'argon2';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  /**
   * 엔티티가 DB에 저장되기 전에 실행되는 메서드
   */
  @BeforeInsert()
  private async hashPassword() {
    const hashedPassword = await argon2.hash(this.password);
    this.password = hashedPassword;
  }
}
