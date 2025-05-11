import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { NewsPage } from '../models/newsPage';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent implements OnInit {

  newsId:string | null = null
  newsPage: NewsPage | null = null

  constructor(private newsService: NewsService,
    private route:ActivatedRoute,
    private sanitizer: DomSanitizer
  ){
    this.route.paramMap.subscribe(params => {
      this.newsId = params.get('newsId');
  })
  }
  ngOnInit() {
    this.newsService.getNewsById(Number(this.newsId)).subscribe(
      data => {
        this.newsPage = data
      }
    )
  }

  extractFilename(path: string): string {
    return path.split('\\').pop() || '';
  }

  sanitizeFileUrl(filePath: string): SafeResourceUrl {
    const filename = this.extractFilename(filePath);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8080/actualite/files/${filename}`);
  }
  


}
