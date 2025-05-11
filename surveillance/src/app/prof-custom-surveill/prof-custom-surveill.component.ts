import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { changeDays } from '../DTO/ChangeDays';
import { examDays } from '../DTO/ExamDays';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { examTime, examUpdAccList } from '../DTO/ExamUpdAcc';

@Component({
  selector: 'app-prof-custom-surveill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prof-custom-surveill.component.html',
  styleUrl: './prof-custom-surveill.component.scss'
})
export class ProfCustomSurveillComponent implements OnInit {
  
  constructor(private httpClient:HttpClient){}

  storedUsername:string | null = ""


  ngOnInit(): void {
      this.loadExamTableByProfId(this.profId);
      this.storedUsername = localStorage.getItem('username');
  }
  
  profId:string = "108"

  days: number[] = Array.from({ length: 30 }, (_, i) => i + 1); // 30 days in the month

examTimeObject: examTime | null = null

timeOptions: string[] = ['08:00','09:00', '10:00','11:00', '12:00', '13:00', '14:00','15:00','16:00'];
  tooltipVisible = false;
  popupVisible = false;
  tooltipX = 0;
  tooltipY = 0;
  tooltipDay: number = 0;
  selectedDay: number | null = null;
  selectedDayInfo: string[] = [];
  timeChangeForm = false;
  examUpdAccList: examUpdAccList = 
  {
    updated: [],
    accepted: [] 
  };

  checkCondition(day: number): boolean {
      if (!this.examTimeObject) {
        return false;
      }
    
      return this.examTimeObject.planning.some(p =>
        new Date(p.date).getDate() === day
      );
    }
  getTimeForDay(day: number): string {
  if (!this.examTimeObject) {
    return 'No special events';
  }

  const times = this.examTimeObject.planning
    .filter(p => new Date(p.date).getDate() === day)
    .map(p => p.heure);

  return times.length > 0 ? times.join(', ') : 'No special events';
  }

  getTimeForDayMultiline(day: number): string {
    if (!this.examTimeObject) {
      return 'No special events';
    }
  
    const times = this.examTimeObject.planning
      .filter(p => new Date(p.date).getDate() === day)
      .map(p => p.heure);
  
    return times.length > 0 ? times.join('\n') : 'No special events';
  }
  

  updatePendingCheck(){
    // let status = this.examDays.find(exam => new Date(exam.date).getDate() === this.selectedDay)?.status;
    // if (status == "update"){
    //   return true;
    // }else
    // {return false;}
  }



  showTooltip(day: number, event: MouseEvent) {
    if (this.checkCondition(day)) { // Show tooltip only for special days
      this.tooltipDay = day; 
      this.tooltipVisible = true;
      this.tooltipX = event.clientX ; 
      this.tooltipY = event.clientY ;
    }
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }

  onHighlightClick(day: number, event: MouseEvent) {
    if (this.checkCondition(day)) {
    console.log("Clicked on highlighted day:", day);
    this.openPopup(day,event);
    }
  }

  openPopup(day: number, event: MouseEvent) {
    // this.selectedDay = day;
    // this.popupX = event.clientX + 10; // Position popup near the cursor
    // this.popupY = event.clientY + 10;
    this.selectedDay = day;
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
}
  openChangeForm() {
    this.timeChangeForm = true;
  }
  changeExamDate(newDate:any,newTime:any){
    
  }
  

  loadExamTableByProfId(profId:string){
    // this.httpClient.get<examTime>(`http://127.0.0.1:8000/surveillances/Enseignant%20${profId}/`)
    this.httpClient.get<examTime>(`http://127.0.0.1:8000/surveillances/Enseignant%20276/`)
    .subscribe({
      next: (res) =>{
        this.examTimeObject = res
        console.log(res)
      }
    })
  }
  
}
