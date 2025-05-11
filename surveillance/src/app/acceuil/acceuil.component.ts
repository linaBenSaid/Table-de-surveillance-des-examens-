import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss'
})
export class AcceuilComponent implements OnInit{
  constructor(private newsService:NewsService){}
storedUsername:string | null = ""
  
  newsList:any = []
  currentPage: number = 1;
  totalPages: number = 0;
  
  ngOnInit(): void {
    this.loadNews(this.currentPage)
    this.storedUsername = localStorage.getItem('username');
    // this.newsService.getAllNews(this.currentPage).subscribe(
    //   (data) =>{
    //     this.newsList = data.content
    //     this.totalPages = data.totalPages;
    //     this.currentPage = data.number + 1;
    //     console.log(data.content)
    //   }
    // )  
  }

  loadNews(page:number){
    console.log(page)
    this.newsService.getAllNews(page).subscribe(
      (data) =>{
        this.newsList = data.content
        this.totalPages = data.totalPages;
        this.currentPage = data.number;
        console.log(data.content)
      }
    )  
  }
 



}
