import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  socialId: string; // 소셜 ID

  @Column()
  provider: string; // 소셜 제공 업체(ex. 카카오/네이버)
}
