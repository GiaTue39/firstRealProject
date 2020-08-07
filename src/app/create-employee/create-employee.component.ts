import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Employees } from '../employee';
import { CreateEmployeeModel } from '../createEmployee';
import { EmployeeService } from '../employee.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  @Output() change: EventEmitter<MatSlideToggleChange>;

  message: string;

  createEmployee: CreateEmployeeModel = {
    name: '',
    phone: '',
    email: '',
    birthday: '',
    avatarURL: '',
    status: 'Disable',
    address: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  };

  onSubmit(form) {
    debugger;
    console.log(form);
    this.message = '';

    // const employee = {
    //   name: this.createEmployee.name,
    //   phone: this.createEmployee.phone,
    //   email: this.createEmployee.email,
    //   birthday: this.createEmployee.birthday,
    //   status: this.createEmployee.status,
    //   address: this.createEmployee.address,
    // };

    // if (
    //   this.createEmployee.name === '' ||
    //   this.createEmployee.phone === '' ||
    //   this.createEmployee.email === '' ||
    //   this.createEmployee.birthday === '' ||
    //   this.createEmployee.status === '' ||
    //   this.createEmployee.address === ''
    // ) {
    //   return (this.message = 'Please enter all fields');
    // } else {
    //   this.employeeService.createEmployee(this.createEmployee).subscribe((data) => {
    //     console.log(data);
    //     alert('Created successfully !');
    //     window.location.href = './employees';
    //   });
    // }

    if (form.invalid) {
      this.message = 'Please enter all fields';
      return;
    }

    this.employeeService
      .createEmployee(this.createEmployee)
      .subscribe((data) => {
        console.log(data);
        // alert('Created successfully !');
        this.snackBar.open('Created successfully ! :D', 'Cancel', {
          duration: 2000,
        });
        // window.location.href = './employees';
        this.router.navigate(['/employees']);
      });
  }

  onChange(ob: MatSlideToggleChange) {
    // if (ob.checked) {
    //   this.createEmployee.status = 'Enable';
    // } else {
    //   this.createEmployee.status = 'Disable';
    // }

    this.createEmployee.status = ob.checked ? 'Enable' : 'Disable';
  }
}
