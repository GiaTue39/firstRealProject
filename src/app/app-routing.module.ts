import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

const routes: Routes = [
  { path: '', component: SignUpPageComponent },
  { path: 'login', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/create', component: CreateEmployeeComponent },
  { path: 'employees/:id', component: DetailEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
