import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CreateCompanyModel } from "../../models/createcompany";
import { CompanyService } from '../../services/company.service';
import { CanDeactivateComponent } from 'src/app/can-deactivate.component';
import { CreateCompanyActions } from '../../actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectIsCreateCompany,
  selectAllCompanies,
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

  constructor(
    private companyService: CompanyService,
    private snackBar: MatSnackBar,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.companies$ = this.store.pipe(select(selectAllCompanies));
    this.isCreated$ = this.store.pipe(select(selectIsCreateCompany));
  }

  componentCanDeactivate(): boolean {
    let notify: boolean;
    if (this.form.dirty) {
      notify = confirm("Do u want to leave CREATE COMPANY page ?");
    }
    return notify;
  }

  onSubmit(company: NgForm) {

    this.store.dispatch(
      CreateCompanyActions.createCompany({ company: company.value })
    );

  }

}
