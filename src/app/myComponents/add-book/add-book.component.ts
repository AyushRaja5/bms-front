import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  title: string = '';
  author: string = '';
  description: string = '';
  year: number = 0;
  createdAt: Date = new Date();
  constructor(private http: HttpClient, private router: Router) { }

  addBook(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const newBookData = {
      title: this.title,
      author: this.author,
      description: this.description,
      year: this.year,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    console.log(newBookData);
    this.http.post('http://localhost:3000/book/addbook', newBookData, { headers }).subscribe(
      (response) => {
        console.log('Book added successfully', response);
        this.router.navigate(['/allbooks']);
      },
      error => {
        console.error('Error adding book', error);
        // Handle error adding the book
      }
    );
  }
}
