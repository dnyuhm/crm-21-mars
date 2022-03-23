import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
    console.log('page list instanced');
    this.ordersService.collection$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
