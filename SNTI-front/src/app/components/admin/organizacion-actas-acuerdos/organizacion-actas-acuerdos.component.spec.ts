import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionActasAcuerdosComponent } from './organizacion-actas-acuerdos.component';

describe('OrganizacionActasAcuerdosComponent', () => {
  let component: OrganizacionActasAcuerdosComponent;
  let fixture: ComponentFixture<OrganizacionActasAcuerdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionActasAcuerdosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizacionActasAcuerdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
