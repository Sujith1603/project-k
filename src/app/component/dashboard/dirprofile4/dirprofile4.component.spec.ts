import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dirprofile4Component } from './dirprofile4.component';

describe('Dirprofile4Component', () => {
  let component: Dirprofile4Component;
  let fixture: ComponentFixture<Dirprofile4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dirprofile4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dirprofile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
