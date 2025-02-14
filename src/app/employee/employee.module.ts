import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CreateEmployeeComponent, DetailEmployeeComponent, ListEmployeesComponent } from './components';
import { DialogDeleteComponent } from './components/list-employees/dialog-delete/dialog-delete.component';
import { employeeRoutings } from './employee.routing';
import { AppMaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeEffect } from './effects/employee.effect';
import { ROOT_REDUCERS } from './reducers';
import { TranslocoRootModule } from '../transloco/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    SharedModule,
    TranslocoRootModule,
    RouterModule.forChild(employeeRoutings),
    StoreModule.forFeature('employee', ROOT_REDUCERS),
    EffectsModule.forRoot([EmployeeEffect]),

  ],
  declarations: [
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DetailEmployeeComponent,
    DialogDeleteComponent,
  ],
  
})
export class EmployeeModule { }

