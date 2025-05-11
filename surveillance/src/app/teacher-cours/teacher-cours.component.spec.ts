import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCoursComponent } from './teacher-cours.component';

describe('TeacherCoursComponent', () => {
  let component: TeacherCoursComponent;
  let fixture: ComponentFixture<TeacherCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
