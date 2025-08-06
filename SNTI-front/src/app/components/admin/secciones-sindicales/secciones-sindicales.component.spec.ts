import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesSindicalesComponent } from './secciones-sindicales.component';

describe('SeccionesSindicalesComponent', () => {
  let component: SeccionesSindicalesComponent;
  let fixture: ComponentFixture<SeccionesSindicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionesSindicalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccionesSindicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
