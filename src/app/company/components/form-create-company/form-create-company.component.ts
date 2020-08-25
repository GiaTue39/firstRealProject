import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CreateCompanyModel } from "../../models/createcompany";
import { CanDeactivateComponent } from 'src/app/can-deactivate.component';
import { CreateCompanyActions } from '../../actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectIsCreateCompany,
  selectAllCompanies,
  selectDangGuiYeuCauLenServerDeTaoCongTy
} from "../../selectors/create-company.selector";
@Component({
  selector: 'app-form-create-company',
  templateUrl: './form-create-company.component.html',
  styleUrls: ['./form-create-company.component.css']
})
export class FormCreateCompanyComponent implements OnInit, CanDeactivateComponent {
  @ViewChild('form') form: NgForm;
  createCompany: CreateCompanyModel = {
    logoURL: '',
    name: '',
    phone: '',
    email: '',
    website: '',
    address: '',
  };

  companies$: Observable<any>;
  isCreated$: Observable<boolean>;             
  selectDangGuiYeuCauLenServerDeTaoCongTy$: Observable<boolean>;
  isSubmitted  = false;     

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.companies$ = this.store.pipe(select(selectAllCompanies));
    this.isCreated$ = this.store.pipe(select(selectIsCreateCompany));
    this.selectDangGuiYeuCauLenServerDeTaoCongTy$ = this.store.pipe(select(selectDangGuiYeuCauLenServerDeTaoCongTy));
  }

  componentCanDeactivate(): boolean {
    let notify = true;
    if (this.form.dirty && !this.isSubmitted) {
      notify = confirm("Do u want to leave CREATE COMPANY page ?");
    }
    return notify;
  }

  onSubmit(company: NgForm) {
    console.log(company.value);
    this.isSubmitted = true;

    this.store.dispatch(
      CreateCompanyActions.createCompany({ company: company.value })
    );

  }

}
