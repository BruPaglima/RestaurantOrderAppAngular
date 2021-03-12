import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})
export class OrderInputComponent implements OnInit {

  constructor() { }

  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  ngOnInit() {
  }

  textChange() {
    this.inputModelChange.emit(this.inputModel);
  }

}
