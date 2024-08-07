import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeature } from './property-feature.entity';

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
}
