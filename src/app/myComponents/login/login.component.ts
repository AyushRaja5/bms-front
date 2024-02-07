import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login Title component';
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthServiceService) { }

  login(): void {
    this.http.post('http://localhost:3000/users/login', { username: this.username, password: this.password })
      .subscribe(
        (response: any) => {
          if (response && response.token) {
            console.log('Login successful, Hii ', response.user.username);
            localStorage.setItem('token', response.token);
            this.router.navigate(['/']);
          } else {
            console.log(response.message)
            console.warn('Something went wrong in logging');
          }
        },
        error => {
          console.error('Login failed', error);
        }
      );
  }

  // login () : void{
  //   this.authService.proceedLogin(this.username, this.password).subscribe(result=>{
  //     if(result)
  //       console.log(result);
  //     localStorage.setItem("token", "aysuh");
  //   })
  // }
}
