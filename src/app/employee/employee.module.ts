import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { DialogDeleteComponent } from './components/list-employees/dialog-delete/dialog-delete.component';
import { employeeRoutings } from './employee.routing';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    SharedModule,
    RouterModule.forChild(employeeRoutings)
  ],
  declarations: [
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DetailEmployeeComponent,
    DialogDeleteComponent,
  ]
})
export class EmployeeModule { }
