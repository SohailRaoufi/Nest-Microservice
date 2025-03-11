import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const productServiceConfig: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'product-consumer',
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  },
};
