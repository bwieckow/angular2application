import {Component} from '@angular/core';
import {StockService} from './stock.service'

@Component({
    moduleId: module.id,
    selector: 'stocks',
    template: `<h2>Stocks</h2> 
      {{title}} 
      <ul [ngStyle]="{'color':myColor, 'font-size':mySize}">
      <li *ngFor="let stock of stocks">
        {{stock}}
      </li>
      </ul>
      <hr>

      <ul *ngIf="stockMarkets.length == 5" [ngClass]="{customClass:isColorBrown , centerClass:isCenter}">
       <li *ngFor="let stockMarket of stockMarkets">{{stockMarket}}</li>
      </ul>
   
      <hr>
      
      <div [ngSwitch]="stockMarkets[4]" >
       <div *ngSwitchCase="stockMarkets[0]">New York Stock Change</div>
       <div *ngSwitchCase="stockMarkets[4]">London Stock Change</div>
       <div *ngSwitchDeafault>Could not find a match</div>
      </div>`,
    styles:[`
    
      .customClass{
        color: brown;
      }
      
      .centerClass{
        text-align: center;
      }
    
    `]
})

export class StocksComponent {
    isCenter = false;
    isColorBrown = true;

    mySize = '200%';
    myColor = 'blue';

    title = 'List of Stocks: ';
    //stocks = ['AAPL', 'IBM', 'GOOGLE'];
    stocks
    showStockMarket = true;

    stockMarkets = ['NYSE','NASDAQ','EURONEXT','HKSE','LSE'];

    constructor(stockService : StockService) {
      this.stocks = stockService.getStocks();
    }

}
