import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleOrderComponent } from './display-single-order.component';

describe('DisplaySingleOrderComponent', () => {
  let component: DisplaySingleOrderComponent;
  let fixture: ComponentFixture<DisplaySingleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySingleOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySingleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
