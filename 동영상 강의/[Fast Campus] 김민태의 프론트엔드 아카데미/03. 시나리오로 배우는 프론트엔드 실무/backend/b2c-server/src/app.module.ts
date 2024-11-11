import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule, ProductsModule, HealthModule, OrdersModule } from './domain';

@Module({
  imports: [
    HealthModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.RUNTIME_DATABASE_USER_NAME || 'root',
      password: process.env.RUNTIME_DATABASE_PASSWORD || '1234',
      database: '12shop',
      autoLoadEntities: true,
      synchronize: process.env.INIT === 'true' || false,
      logging: true,
    }),
  ],
})
export class AppModule {}
