import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeature } from './property-feature.entity';
import { User } from './user.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  price: number;

  @OneToOne(() => PropertyFeature, (propertyFeature) => propertyFeature.property, { cascade: true })
  propertyFeature: PropertyFeature;

  @ManyToOne(() => User, (user) => user.properties, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  user: User;

  @ManyToMany(() => User, (user) => user.likedProperties)
  likedBy: User[];
}
