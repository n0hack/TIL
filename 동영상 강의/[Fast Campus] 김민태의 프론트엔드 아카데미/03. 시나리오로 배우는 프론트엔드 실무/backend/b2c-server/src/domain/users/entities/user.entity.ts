import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 30, nullable: false })
  name: string;

  @Column('varchar', { length: 20, nullable: false })
  nickname: string;

  @Column('varchar', { length: 50, nullable: false })
  email: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
