import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhijosComponent } from './userhijos.component';

describe('UserhijosComponent', () => {
  let component: UserhijosComponent;
  let fixture: ComponentFixture<UserhijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserhijosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserhijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
