import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsResponse } from '../models/newsList';
import { NewsPage } from '../models/newsPage';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api_base_url = "http://localhost:8080/actualite"

  constructor(private httpClient:HttpClient) { }

    addNews(news : any){
      return this.httpClient.post<any>(
        `${this.api_base_url}/add`,news
      )
    }

    getAllNews(pageNumber:number):Observable<newsResponse>{
      const size = 5;
      return this.httpClient.get<newsResponse>(
        `${this.api_base_url}?page=${pageNumber}&size=${size}`
      )
    }

    getNewsById(newsId:number):Observable<NewsPage>{
      return this.httpClient.get<NewsPage>(`${this.api_base_url}/${newsId}`)
    }

}
