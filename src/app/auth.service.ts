import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use BehaviorSubject to track login state
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Expose the login status as an observable
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getUser() {
  return {
    name: localStorage.getItem('userName') || 'User',
    email: localStorage.getItem('userEmail') || 'email@example.com'
  };
}

  // Fake login method
  login(): void {
    this.loggedIn.next(true);
  }

  // Fake logout method
  logout(): void {
    this.loggedIn.next(false);
  }
}
