import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionCapacitacionComponent } from './formacion-capacitacion.component';

describe('FormacionCapacitacionComponent', () => {
  let component: FormacionCapacitacionComponent;
  let fixture: ComponentFixture<FormacionCapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionCapacitacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacionCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
