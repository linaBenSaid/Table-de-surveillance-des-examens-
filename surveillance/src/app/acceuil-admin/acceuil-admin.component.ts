import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-acceuil-admin',
  standalone: true,
  imports: [],
  templateUrl: './acceuil-admin.component.html',
  styleUrl: './acceuil-admin.component.scss'
})
export class AcceuilAdminComponent {
 constructor(private newsService:NewsService){}

 imageFile!: File;


  createNews(title:string,content:string){
    console.log(title,content)    
    
    const formData = new FormData();

// Add main title
formData.append('title', title);

// Add the actualiteDataDTO as a JSON string
const actualiteDataDTO = [
  { title: title, content: content, type: 'TEXT' },
  // { title: this.imageTitle, content: 'imageFile', type: 'IMAGE' }
];
formData.append('actualiteDataDTO', JSON.stringify(actualiteDataDTO));

// Attach multiple files
// this.imageFiles.forEach((file: File) => {
//   formData.append('files', file);  // ⬅️ matches @RequestPart("files")
// });
if (this.imageFile) {
  formData.append('files', this.imageFile);
} 

  this.newsService.addNews(formData).subscribe({
    next: (response) => console.log('✅ Success:', response),
    error: (error) => console.error('❌ Error:', error)
  })

  }

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

}
