import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenwriterComponent } from './screenwriter.component';

describe('ScreenwriterComponent', () => {
  let component: ScreenwriterComponent;
  let fixture: ComponentFixture<ScreenwriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenwriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
