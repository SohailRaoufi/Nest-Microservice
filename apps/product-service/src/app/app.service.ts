import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger;
  constructor() {
    this.logger = new Logger();
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getProducts(data: any) {
    this.logger.log('Product Recieved The Following DAta', data);

    return { message: 'Product Recieved The Following DAta', data };

    // return this.productClient.emit('getProducts', {
    //   name: 'Shoe',
    //   category: 1,
    // });
  }
}
