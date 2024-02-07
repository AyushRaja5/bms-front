import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './myComponents/home/home.component';
import { AllBooksComponent } from './myComponents/all-books/all-books.component';
import { LoginComponent } from './myComponents/login/login.component';
import { RegisterComponent } from './myComponents/register/register.component';
import { SinglebookComponent } from './myComponents/singlebook/singlebook.component';
import { AddBookComponent } from './myComponents/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AllBooksComponent,
    // LoginComponent,
    // RegisterComponent,
    // SinglebookComponent,
    // AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
