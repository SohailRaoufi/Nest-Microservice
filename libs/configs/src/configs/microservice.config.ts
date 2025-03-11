/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

enum ServiceName {
  PRODUCT_SERVICE = 'PRODUCT_SERVICE',
}

type MicroserviceConfig = {
  [K in keyof typeof ServiceName]: ClientProviderOptions;
};

export const microserviceConfig: MicroserviceConfig = {
  PRODUCT_SERVICE: {
    name: 'PRODUCT_SERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'product',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'product-consumer',
      },
    },
  },
};
