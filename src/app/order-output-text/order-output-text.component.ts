import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-output-text',
  templateUrl: './order-output-text.component.html',
  styleUrls: ['./order-output-text.component.css']
})
export class OrderOutputTextComponent implements OnInit {

  constructor() { }

  @Input() outputModel: string;
  @Output() outputModelChange = new EventEmitter<string>();

  ngOnInit() {
  }

}
