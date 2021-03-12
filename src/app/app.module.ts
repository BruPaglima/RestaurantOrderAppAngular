import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule }   from '@angular/forms';
import { OrderInputComponent } from './order-input/order-input.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { OrderButtonComponent } from './order-button/order-button.component';
import { OrderOutputTextComponent } from './order-output-text/order-output-text.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderInputComponent,
    OrderGridComponent,
    OrderButtonComponent,
    OrderOutputTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
