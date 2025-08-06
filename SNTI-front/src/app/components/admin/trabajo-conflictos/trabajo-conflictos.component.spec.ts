import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoConflictosComponent } from './trabajo-conflictos.component';

describe('TrabajoConflictosComponent', () => {
  let component: TrabajoConflictosComponent;
  let fixture: ComponentFixture<TrabajoConflictosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajoConflictosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrabajoConflictosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
