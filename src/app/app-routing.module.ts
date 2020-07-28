import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  { path: 'login', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'employee', component: ListEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
