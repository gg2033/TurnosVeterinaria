import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTurnoComponentComponent } from './new-turno-component.component';

describe('NewTurnoComponentComponent', () => {
  let component: NewTurnoComponentComponent;
  let fixture: ComponentFixture<NewTurnoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTurnoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTurnoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
