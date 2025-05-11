import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCustomSurveillComponent } from './prof-custom-surveill.component';

describe('ProfCustomSurveillComponent', () => {
  let component: ProfCustomSurveillComponent;
  let fixture: ComponentFixture<ProfCustomSurveillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfCustomSurveillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfCustomSurveillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
