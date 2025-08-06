import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeccionesSindicalesComponent } from './admin-secciones-sindicales.component';

describe('AdminSeccionesSindicalesComponent', () => {
  let component: AdminSeccionesSindicalesComponent;
  let fixture: ComponentFixture<AdminSeccionesSindicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSeccionesSindicalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSeccionesSindicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
