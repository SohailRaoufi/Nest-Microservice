import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientKafka
  ) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getCategory(id: number) {
    console.log(this.productClient.status);

    const response = this.productClient.send('getProducts', {
      category: id,
    });

    console.log(response);
    return response;
  }
}
