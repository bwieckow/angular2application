import {Injectable} from '@angular/core'

@Injectable()
export class StockService {

  getStocks(): string[] {
    return ['APPL', 'IBM', 'GOOGLE', 'UBER', 'ABC'];
  }

}
