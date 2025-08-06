import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercursosComponent } from './usercursos.component';

describe('UsercursosComponent', () => {
  let component: UsercursosComponent;
  let fixture: ComponentFixture<UsercursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
