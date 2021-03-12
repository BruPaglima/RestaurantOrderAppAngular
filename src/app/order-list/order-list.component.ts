import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderInputText: string;
  orderOutputText: string = "Order output";

  columnDefs: { field: string; resizable: boolean; width: number}[];
  rowData: { clientOrderInput: string; clientOrderOutput: string; }[];

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.columnDefs = [
      { field: 'clientOrderInput',  resizable: true , width: 150 },
      { field: 'clientOrderOutput',  resizable: true, width: 300 }
  ];

  }

  sendOrder() {    
    var orderInput = this.orderInputText;

    this.http.post<any>('https://localhost:44311/RestaurantOrder/CreateOrder', { ClientOrderInput: orderInput })
      .subscribe(data => {

      this.orderOutputText = data.clientOrderOutput;
      this.rowData = data.orderHistory;
     
    });
     
  }
 
}
