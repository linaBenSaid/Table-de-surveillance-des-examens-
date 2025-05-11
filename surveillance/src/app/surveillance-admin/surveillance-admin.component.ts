import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveillance-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surveillance-admin.component.html',
  styleUrl: './surveillance-admin.component.scss'
})
export class SurveillanceAdminComponent implements OnInit {

  constructor(private httpClient:HttpClient){}
  ngOnInit() {
    console.log(this.checkIfExcelExists())
  }

  popupVisible = false;

  fileExists = false;

  // open the file by default

  openPopup(){
    this.popupVisible = true;

    // run alogorithme
    this.httpClient.get<any>(`http://127.0.0.1:8000/run-algos/`).subscribe({
    next: (res) => {
      console.log('Algorithm finished:', res);
      //trigger download
      this.fileExists = true
      this.downloadExcelFile()
      this.closePopup();
    },
    error: (err) => {
      console.error('Error running algorithm:', err);
      this.closePopup();
      this.fileExists = true
      this.downloadExcelFile()
      this.closePopup();
    }
  })
  }

  closePopup(){
    this.popupVisible = false;
  }

  downloadExcelFile() {
    this.httpClient.get('http://localhost:8080/actualite/files/excel', {
      responseType: 'blob',
      observe: 'response'
    }).subscribe({
      next: (res) => {
        const blob = new Blob([res.body!], { type: res.headers.get('Content-Type')! });
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'planning_surveillance_optimise.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        if (err.status === 404) {
          alert("No file");
        } else {
          alert("An error occurred");
        }
      }
    });
  }

  checkIfExcelExists() {
    this.httpClient.get<boolean>('http://localhost:8080/actualite/files/excel/exists')
      .subscribe({
        next: (exists) => {
          console.log('Excel file exists:', exists);
          if (exists) {
            this.fileExists = true
          } else {
            this.fileExists = false
          }
        },
        error: () => {
          alert("Error checking file");
        }
      });
  }

  deleteFilesFromFolder() {
    this.httpClient.delete('http://localhost:8080/actualite/delete-files', { observe: 'response' })
      .subscribe({
        next: response => {
          if (response.status === 200) {
            alert('Files deleted successfully.');
            this.fileExists = false
          }
        },
        error: err => {
          if (err.status === 400) {
            alert('Invalid directory path.');
          } else {
            alert('Failed to delete files.');
          }
        }
      });
  }
  
  

}
