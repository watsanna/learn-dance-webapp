import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  name = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(); // toggles isLoggedIn to true

    // Optionally set the user data
    localStorage.setItem('userName', this.name);
    localStorage.setItem('userEmail', this.email);

    this.router.navigate(['/courses']); // redirect to home or courses
  }

    scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }




}
