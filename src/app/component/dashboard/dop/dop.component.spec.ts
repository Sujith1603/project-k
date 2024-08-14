import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopComponent } from './dop.component';

describe('DopComponent', () => {
  let component: DopComponent;
  let fixture: ComponentFixture<DopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
