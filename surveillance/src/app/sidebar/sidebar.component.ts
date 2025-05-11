import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit
{

  showSidebar = true;

  storedUsername:string | null = ""
  
  toggle = true;

  toggleClass(){
    this.toggle = !this.toggle;
  }
  
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this.showSidebar = !event.url.includes('/login');
        // this.showSidebar = !(event.url.includes('/login') || event.url.includes('/register'));
      });
  }
  ngOnInit(): void {
    this.storedUsername = localStorage.getItem('username');
    console.log("Username:", this.storedUsername);
  }

  get isAdmin(): boolean {
    return localStorage.getItem('username') === 'admin';
  }

}
