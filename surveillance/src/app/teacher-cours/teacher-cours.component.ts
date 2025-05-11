import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-cours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-cours.component.html',
  styleUrl: '../student-cours/student-cours.component.scss'
})
export class TeacherCoursComponent {
  popupVisible = false;


  closePopup(){
    this.popupVisible = false;
  }

  openPopup(){
    this.popupVisible = true;
  }

}
