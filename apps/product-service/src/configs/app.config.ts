import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const productServiceConfig: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'product-consumer',
    },
  },
};
