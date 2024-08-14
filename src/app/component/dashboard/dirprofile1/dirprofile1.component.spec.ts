import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dirprofile1Component } from './dirprofile1.component';

describe('Dirprofile1Component', () => {
  let component: Dirprofile1Component;
  let fixture: ComponentFixture<Dirprofile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dirprofile1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dirprofile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
