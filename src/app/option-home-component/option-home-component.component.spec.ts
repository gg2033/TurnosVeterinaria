import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionHomeComponentComponent } from './option-home-component.component';

describe('OptionHomeComponentComponent', () => {
  let component: OptionHomeComponentComponent;
  let fixture: ComponentFixture<OptionHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionHomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
