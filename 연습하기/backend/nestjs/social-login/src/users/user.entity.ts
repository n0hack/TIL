import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export enum AuthProvider {
  KAKAO = 'kakao',
  NAVER = 'naver',
  LOCAL = 'local',
}

@Entity()
@Index(['provider', 'providerId'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  profileImage?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ type: 'enum', enum: AuthProvider })
  provider: AuthProvider; // 인증 제공 업체(ex. 카카오/네이버/로컬)

  @Column()
  providerId: string; // 인증 제공 업체 고유 ID

  @CreateDateColumn()
  createdAt?: Date;
}
