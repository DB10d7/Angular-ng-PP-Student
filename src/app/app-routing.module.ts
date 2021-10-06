import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:"home", component: HomeComponent
  },
  {
    path:"add-student", component: AddStudentComponent
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"register-success", component: RegisterSuccessComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
