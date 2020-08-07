import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { DialogDeleteComponent } from './list-employees/dialog-delete/dialog-delete.component';
import { AppComponent } from './app.component';
import { components } from './components';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CompanyService } from './company.service';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    components,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DetailEmployeeComponent,
    DialogDeleteComponent,
  ],
  entryComponents: [
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppMaterialModule,
    AuthModule,
    AppRoutingModule,

  ],
  providers: [
    CompanyService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
