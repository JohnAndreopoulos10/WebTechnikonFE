import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'nikos koukos';  // will 

  constructor(private http: HttpClient) {}

  register(ownerData: Owner): Observable<any> {
    console.log('Registration data:', ownerData);
    
    // Simulate a successful registration response (Mock)
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ message: 'Registration successful', owner: ownerData }); 
        observer.complete(); 
      }, 2000);

      // return this.http.post<any>(this.apiUrl, ownerData);
    });
  }
}


// contemplating if this should be a service but for now it is