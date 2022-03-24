import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  public states: string[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'Orders list';
    this.collection$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
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

  public changeState(item: Order, event: any) {
    const state = event.target.value;
    this.ordersService
      .changeState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }

  // public changeTitle(): void {
  //   this.myTitle = 'My List Orders (titre change)';
  // }
}
