import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCompComponent } from './notification-comp.component';

describe('NotificationCompComponent', () => {
  let component: NotificationCompComponent;
  let fixture: ComponentFixture<NotificationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
