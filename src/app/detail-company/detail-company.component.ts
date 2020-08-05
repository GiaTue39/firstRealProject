import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

import { DetailCompanyModel } from "../detailcompany";
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {
  detailCompany: DetailCompanyModel = {
    id: '',
    logoURL: '',
    name: '',
    phone: '',
    email: '',
    website: '',
    address: '',
  };

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router, 
    private snackBar:MatSnackBar
  ) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;//snapshot?
    //this.router.navigate(['/companies']);

    this.companyService.getCompany(id).subscribe((company) => {
      this.detailCompany = company;
    })
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('invalid');
      return;
    }

    this.companyService.update(this.detailCompany.id, this.detailCompany).subscribe((company) => {
      // this.detailCompany = company;
      this.snackBar.open('Update successful!','Cancel',{
        duration: 2000, //duration?
      });
      this.router.navigate(['/companies']);
    })

  }
}
