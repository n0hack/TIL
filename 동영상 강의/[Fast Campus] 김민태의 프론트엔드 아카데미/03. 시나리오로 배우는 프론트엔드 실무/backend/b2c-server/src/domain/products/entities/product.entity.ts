import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductPhoto } from './product-photo.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100, nullable: false })
  productName: string;

  @Column('int', { nullable: false })
  price: number;

  @Column('text', { nullable: true })
  detailDescription: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => ProductPhoto, (photo) => photo.product)
  photos: ProductPhoto[];
}
