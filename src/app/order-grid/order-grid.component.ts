import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {


  columnDefs: { field: string; resizable: boolean; width: number }[];


  constructor() {
  }

  @Input()  rowData: { clientOrderInput: string; clientOrderOutput: string; }[];

  ngOnInit() {
    this.columnDefs = [
      { field: 'clientOrderInput', resizable: true, width: 150 },
      { field: 'clientOrderOutput', resizable: true, width: 300 }
    ];

  }


}
