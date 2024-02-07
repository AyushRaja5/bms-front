import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  proceedLogin(username: string, password: string): Observable<boolean> {
    // Implement your login logic here, for example:
    return this.http.post<any>('http://localhost:3000/users/login', { username, password })
  }
  
  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
