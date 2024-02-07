import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = 'user'; // Default role is user

  constructor(private http: HttpClient) {}

  register(): void {
    const registrationData = {
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.http.post<any>('http://localhost:3000/users/register', registrationData)
      .subscribe(
        response => {
          console.log('Registration successful', response);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
  }
}
