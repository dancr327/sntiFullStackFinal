import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbarraComponent } from './adminbarra.component';

describe('AdminbarraComponent', () => {
  let component: AdminbarraComponent;
  let fixture: ComponentFixture<AdminbarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminbarraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
