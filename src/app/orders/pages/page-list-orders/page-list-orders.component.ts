import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public collection$: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'Orders list';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'client',
      'nb Jours',
      'tjm HT',
      'TOTAL HT',
      'TOTAL TTC',
      'State',
    ];

    // console.log('page list instanced');
  }

  ngOnInit(): void {}

  // public changeTitle(): void {
  //   this.myTitle = 'My List Orders (titre change)';
  // }
}
