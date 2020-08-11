import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CreateCompanyModel } from "../../models/createcompany";
import { CompanyService } from '../../services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from 'src/app/can-deactivate.component';
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

  constructor(
    private companyService: CompanyService,
    private snackBar:MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  componentCanDeactivate(): boolean {
    // console.log(this.form);
    let notify: boolean;
    if(this.form.dirty){
      notify = confirm("Do u want to leave CREATE COMPANY page ?");
    }
    return notify;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('invalid');
      return;
    }

    console.log(form.controls);
    console.log(this.createCompany);

    const company = {
      logoURL: this.createCompany.logoURL,
      name: this.createCompany.name,
      phone:this.createCompany.phone,
      email:this.createCompany.email,
      website:this.createCompany.website,
      address: this.createCompany.address
    };

    this.companyService.createCompany(company).subscribe(
      (data) => {
        console.log(data);
        this.snackBar.open('Create successful!','Cancel',{
          duration: 2000,
        });
        this.router.navigate(['/companies']);
      },
      (error) => console.log(error)
    );
    
  }

}
