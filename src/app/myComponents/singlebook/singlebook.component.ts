import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-singlebook',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './singlebook.component.html',
  styleUrl: './singlebook.component.css'
})
export class SinglebookComponent implements OnInit {
  bookId!: string;
  bookDetails: any;
  editMode: boolean = false;

  editedTitle: string = '';
  editedAuthor: string = '';
  editedDescription: string = '';
  editedYear: string = '0';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const bookKaId = param.get('id');
      this.bookId = bookKaId ? bookKaId : '';
      this.fetchBookDetails();
    });
  }
  fetchBookDetails(): void {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      console.log(this.bookId)
      this.http.get<any>(`http://localhost:3000/book/findbyid/${this.bookId}`, { headers }).subscribe(
        response => {
          this.bookDetails = response;
        },
        error => {
          console.error('Error fetching book details', error.message);
        }
      );
    }
  }

  deleteBook(): void {
    if (confirm('Are you sure you want to delete this book?')) {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.http.delete(`http://localhost:3000/book/deletebyid/${this.bookId}`, { headers })
        .subscribe(
          () => {
            console.log('Book deleted successfully');
            this.router.navigate(['/allbooks']);
          },
          error => {
            console.error('Error deleting book', error);
            // Handle error deleting the book
          }
        );
    }
  }

  clearFormFields(): void {
    this.editedTitle = '';
    this.editedAuthor = '';
    this.editedDescription = '';
    this.editedYear = '0';
  }
  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.clearFormFields();
    }
  }

  updateBook(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const updatedBookData = {
      title: this.editedTitle,
      author: this.editedAuthor,
      description: this.editedDescription,
      year: this.editedYear
    };

    console.log(updatedBookData);
    this.http.patch(`http://localhost:3000/book/editbyid/${this.bookId}`, updatedBookData, { headers })
      .subscribe(
        () => {
          console.log('Book updated successfully');
          this.toggleEditMode();
        },
        error => {
          console.error('Error updating book', error);
        }
      );
  }

}
