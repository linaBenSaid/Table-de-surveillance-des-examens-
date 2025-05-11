import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceAdminComponent } from './surveillance-admin.component';

describe('SurveillanceAdminComponent', () => {
  let component: SurveillanceAdminComponent;
  let fixture: ComponentFixture<SurveillanceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveillanceAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveillanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
