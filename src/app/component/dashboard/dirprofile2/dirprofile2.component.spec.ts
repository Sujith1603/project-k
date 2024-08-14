import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dirprofile2Component } from './dirprofile2.component';

describe('Dirprofile2Component', () => {
  let component: Dirprofile2Component;
  let fixture: ComponentFixture<Dirprofile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dirprofile2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dirprofile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
