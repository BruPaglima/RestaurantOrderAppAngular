import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOutputTextComponent } from './order-output-text.component';

describe('OrderOutputTextComponent', () => {
  let component: OrderOutputTextComponent;
  let fixture: ComponentFixture<OrderOutputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOutputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOutputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
