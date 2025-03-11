import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientKafka
  ) {}

  onModuleInit() {
    this.productClient.subscribeToResponseOf('getProducts');
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getCategory(id: number) {
    const response = await firstValueFrom(
      this.productClient.send('getProducts', {
        category: id,
      })
    );

    return response;
  }
}
