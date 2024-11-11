import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product-photos' })
export class ProductPhoto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 300, nullable: false })
  url: string;

  @Column('varchar', { length: 30 })
  contentType: string;

  @Column('int')
  width: number;

  @Column('int')
  height: number;

  @Column('int')
  filesize: number;

  @ManyToOne(() => Product, (product) => product.photos)
  product: Product;
}
