import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

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
