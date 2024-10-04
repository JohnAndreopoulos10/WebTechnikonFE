import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/login'; // Placeholder URL for backend authentication

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log('Login attempt for:', email);

    // Mocking a backend response
    return new Observable(observer => {
      // Simulating a backend response delay
      setTimeout(() => {
        if (email === 'admin@test.com' && password === 'password') {
          observer.next({ token: 'admin-token', role: 'admin' });
        } else if (email === 'owner@test.com' && password === 'password') {
          observer.next({ token: 'owner-token', role: 'owner' });
        } else {
          observer.error('Invalid email or password');
        }
        observer.complete();
      }, 2000);

      // Uncomment for real backend connection
      // return this.http.post<any>(this.apiUrl, { email, password });
    });
  }
}
