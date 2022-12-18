import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) {
  }

  public isCollapsed = true;

  ngOnInit(): void {
  }

  register() {
    const token = localStorage.getItem('token');
    if (token) { 
      this.route.navigate(['/dashboard']);
    } else {
      this.route.navigate(['/register']);
    }
  }

  logout() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.logout();
      this.route.navigate(['/']);
    }
  }

  login() {
    const token = localStorage.getItem('token');
    if (token) {
      this.route.navigate(['/dashboard']);
    } else {
      this.route.navigate(['/login']);
    }
  }

  aboutUs() {
    this.route.navigate(['/about-us']);
  }

  menu() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.menu();
      this.route.navigate(['/menu']);
    }
   
  }

  delivery() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.delivery();
      this.route.navigate(['/delivery']);
    }
  }

  reservation() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.reservation();
      this.route.navigate(['/reservation']);
    }
  }
}

