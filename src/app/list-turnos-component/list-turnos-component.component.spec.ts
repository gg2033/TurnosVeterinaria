import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurnosComponentComponent } from './list-turnos-component.component';

describe('ListTurnosComponentComponent', () => {
  let component: ListTurnosComponentComponent;
  let fixture: ComponentFixture<ListTurnosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTurnosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurnosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
