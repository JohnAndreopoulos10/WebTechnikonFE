// services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'nikos koukos'; // work in progress
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token'); // Remove the token from local storage
    this.router.navigate(['/login']); // Redirect to login page
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token); // Store the token
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null; // Check if the user is logged in
  }
}
