import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersancionesComponent } from './usersanciones.component';

describe('UsersancionesComponent', () => {
  let component: UsersancionesComponent;
  let fixture: ComponentFixture<UsersancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
