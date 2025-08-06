import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpermisoComponent } from './userpermiso.component';

describe('UserpermisoComponent', () => {
  let component: UserpermisoComponent;
  let fixture: ComponentFixture<UserpermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpermisoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserpermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
