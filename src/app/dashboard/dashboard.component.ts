import { Component, OnInit } from '@angular/core';

import {StockService} from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks : string[];


  ngOnInit() {
    this.getAllStocks();
  }

  constructor(private stockService: StockService) {

  }

  getAllStocks(){
    this.stockService.getStocksAPI()
      .subscribe(
        data => this.stocks = data,
        error => console.log('Server Error2')
      );
  }

  createStock(newStockCode : string, newName : string) {
    this.stockService.createStock(newStockCode, newName).subscribe();
    location.reload();
  }
}
