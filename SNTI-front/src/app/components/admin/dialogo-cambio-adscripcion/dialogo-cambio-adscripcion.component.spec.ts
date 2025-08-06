import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCambioAdscripcionComponent } from './dialogo-cambio-adscripcion.component';

describe('DialogoCambioAdscripcionComponent', () => {
  let component: DialogoCambioAdscripcionComponent;
  let fixture: ComponentFixture<DialogoCambioAdscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoCambioAdscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoCambioAdscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
