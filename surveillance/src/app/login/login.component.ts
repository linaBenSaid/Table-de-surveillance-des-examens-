import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private httpClient:HttpClient,private router: Router){}

    login(username: string, password: string) {
      console.log("hello")
      console.log(username)
      console.log(password)
      if(username == "admin"){
        localStorage.setItem('username', username); 
        this.router.navigate(['/news']);
      }else
      {
        localStorage.setItem('username', username); 
        this.router.navigate(['/news']);
      }
      // return this.httpClient.post<any>('http://localhost:8080/api/auth/login', { "username":username, "password":password })
      //   .subscribe({
      //     next: (response) =>  {
      //       localStorage.setItem('username', response.username); 
      //       // this.router.navigate(['/admin']);
      //     },
      //     error: (err) => {
      //       console.error('Login failed', err);
      //     }
      //   });
    }

}
