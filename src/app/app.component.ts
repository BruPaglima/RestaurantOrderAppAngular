import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestaurantOrderAngular';
  initialInput: string = '';
  initialOutput: string = 'Output here';
  initialRowData: { clientOrderInput: string; clientOrderOutput: string; }[] =
   [
    { clientOrderInput: 'Insert first order', clientOrderOutput: 'Insert first order' }
  ];
}



