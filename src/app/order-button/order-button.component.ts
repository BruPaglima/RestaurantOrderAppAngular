import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.css']
})
export class OrderButtonComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  @Input() outputModel: string;
  @Output() outputModelChange = new EventEmitter<string>(); 

  @Input() rowData: { clientOrderInput: string; clientOrderOutput: string; }[]; 
  @Output() rowDataChange = new EventEmitter<{ clientOrderInput: string; clientOrderOutput: string; }[]>();  

  ngOnInit() {
  }

  sendOrder() {    
    var orderInput = this.inputModel;

    console.log(orderInput);

    this.http.post<any>('https://localhost:44311/RestaurantOrder/CreateOrder', { ClientOrderInput: orderInput })
      .subscribe(data => {    

      this.rowData = data.orderHistory;
      this.rowDataChange.emit(this.rowData);

      this.outputModel = data.clientOrderOutput;
      this.outputModelChange.emit(this.outputModel);
     
    });
     
  }

}
