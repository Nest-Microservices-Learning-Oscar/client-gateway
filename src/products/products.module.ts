import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE, envs } from 'src/config';

@Module({
  controllers: [ProductsController],
  imports: [
    ClientsModule.register(
      [
        {
          name: PRODUCT_SERVICE,
          transport: Transport.TCP,
          options: {
            host: envs.productsMicroservicesHost,
            port: envs.productsMicreoservicesPort
          }
        }
      ]
    )
  ]
})
export class ProductsModule { }
