import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay1Component } from './pay1.component';

describe('Pay1Component', () => {
  let component: Pay1Component;
  let fixture: ComponentFixture<Pay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pay1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
