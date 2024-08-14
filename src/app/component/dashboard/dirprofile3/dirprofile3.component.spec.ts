import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dirprofile3Component } from './dirprofile3.component';

describe('Dirprofile3Component', () => {
  let component: Dirprofile3Component;
  let fixture: ComponentFixture<Dirprofile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dirprofile3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dirprofile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
