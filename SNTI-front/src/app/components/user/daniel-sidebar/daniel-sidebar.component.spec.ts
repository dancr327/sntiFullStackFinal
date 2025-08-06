import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielSidebarComponent } from './daniel-sidebar.component';

describe('DanielSidebarComponent', () => {
  let component: DanielSidebarComponent;
  let fixture: ComponentFixture<DanielSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanielSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanielSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
