import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 40,
  })
  name: string;

  @Column()
  price: number;

  @Column()
  stock_number: number;

  @Column({
    length: 100,
  })
  description: string;
}
