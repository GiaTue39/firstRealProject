import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CreateCompanyModel } from "../createcompany";
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-form-create-company',
  templateUrl: './form-create-company.component.html',
  styleUrls: ['./form-create-company.component.css']
})
export class FormCreateCompanyComponent implements OnInit {
  createCompany: CreateCompanyModel = {
    logoURL: '',
    name: '',
    phone: '',
    email: '',
    website: '',
    address: '',
  };

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('invalid');
      return;
    }

    console.log(form.controls);
    console.log(this.createCompany);

    const company = {
      logoURl: this.createCompany.logoURL,
      name: this.createCompany.name,
      phone:this.createCompany.phone,
      email:this.createCompany.email,
      website:this.createCompany.website,
      address: this.createCompany.address
    };

    this.companyService.createCompany(company).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    
  }

}
