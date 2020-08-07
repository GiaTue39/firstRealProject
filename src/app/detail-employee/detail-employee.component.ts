import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

import { EmployeeService } from '../employee.service';
import { FormGroup, Validators, NgForm } from '@angular/forms';
import { DetailEmployeeModel } from '../detail-employee';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css'],
})
export class DetailEmployeeComponent implements OnInit {
  formBuilder: any;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.employeeService.getEmployee(id).subscribe((employee) => {
      this.detailEmployee = employee;
    });
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  };

  detailEmployee: DetailEmployeeModel = {
    id: '',
    name: '',
    phone: '',
    email: '',
    birthday: '',
    status: '',
    avatarURL: '',
    address: '',
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('valid');
    }

    this.employeeService
      .update(this.detailEmployee.id, this.detailEmployee)
      .subscribe((employee) => {
        this.detailEmployee = employee;
      });
    this.snackBar.open('Saved successfully ! :D', 'Cancel', {
      duration: 4000,
    });
    this.router.navigate(['/employees']);
  }
}
