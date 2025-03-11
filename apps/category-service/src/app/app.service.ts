import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientKafka
  ) {}

  async onModuleInit() {
    await this.productClient.connect();
    this.productClient.subscribeToResponseOf('getProducts');
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getCategory(id: number) {
    const response = this.productClient.send('getProducts', {
      category: id,
    });

    console.log(response);
    return response;
  }
}
