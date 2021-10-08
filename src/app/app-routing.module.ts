import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AuthGuard } from './auth.guard';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

const routes: Routes = [

  {
    path:"home", component: HomeComponent
  },
  {
    path:"studentList", component: StudentListComponent , canActivate: [AuthGuard]
  },
  {
    path:"add-student", component: AddStudentComponent , canActivate: [AuthGuard]
  },
  {
    path:"studentDetails/:id", component: StudentDetailsComponent , canActivate: [AuthGuard]
  },
  {
    path:"updateStudent/:id", component: UpdateStudentComponent , canActivate: [AuthGuard]
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
