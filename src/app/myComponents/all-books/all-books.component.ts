import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit {
  isAuthenticated: boolean = false;
  books: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token;

      if (this.isAuthenticated) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        this.http.get<any[]>('http://localhost:3000/book/allbooks', {headers})
          .subscribe(
            (response) => {
              console.log('Fetched books successfully', response);
              this.books = response;
            },
            error => {
              console.error('Error fetching books', error);
            }
          );
      }
    } else {
      console.warn('localStorage is not available. Unable to check authentication status.');
    }
  }
}
