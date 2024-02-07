// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './myComponents/login/login.component';
import { AllBooksComponent } from './myComponents/all-books/all-books.component';
import { RegisterComponent } from './myComponents/register/register.component';
import { HomeComponent } from './myComponents/home/home.component';
import { SinglebookComponent } from './myComponents/singlebook/singlebook.component';
import { AddBookComponent } from './myComponents/add-book/add-book.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'allbooks', component: AllBooksComponent}, 
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'book/:id', component: SinglebookComponent },
  {path: 'addbook', component:AddBookComponent, canActivate: [authGuard]}, // Apply the AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
