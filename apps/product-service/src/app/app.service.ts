import { Inject, Injectable, Logger } from '@nestjs/common';
import { productDetails } from './products';

@Injectable()
export class AppService {
  private logger;
  constructor() {
    this.logger = new Logger();
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getProducts(data: { category: string }) {
    this.logger.log('Product Received The Following Data', data);

    const product = productDetails.filter(
      (cat) => cat.categoryId === +data.category
    );

    return product;
  }
}
