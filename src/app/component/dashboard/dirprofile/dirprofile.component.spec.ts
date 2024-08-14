import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirprofileComponent } from './dirprofile.component';

describe('DirprofileComponent', () => {
  let component: DirprofileComponent;
  let fixture: ComponentFixture<DirprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
