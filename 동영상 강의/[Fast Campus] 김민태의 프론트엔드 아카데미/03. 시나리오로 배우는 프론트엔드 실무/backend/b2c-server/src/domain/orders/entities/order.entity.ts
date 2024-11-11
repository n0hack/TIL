import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  price: number;

  @Column('int', { nullable: false })
  quantity: number;

  // @Column({
  //   name: 'created',
  //   type: 'timestamp with time zone',
  // })
  // created: Date;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
