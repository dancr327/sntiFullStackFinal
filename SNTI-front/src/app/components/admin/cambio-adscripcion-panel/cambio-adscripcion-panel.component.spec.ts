import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioAdscripcionPanelComponent } from './cambio-adscripcion-panel.component';

describe('CambioAdscripcionPanelComponent', () => {
  let component: CambioAdscripcionPanelComponent;
  let fixture: ComponentFixture<CambioAdscripcionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambioAdscripcionPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambioAdscripcionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
