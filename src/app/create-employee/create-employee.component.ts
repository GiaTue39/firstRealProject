import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Employees } from '../employee';
import { createEmployee } from '../createEmployee';
import { EmployeeService } from '../employee.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @Output() change: EventEmitter<MatSlideToggleChange>;
  createEmployee: createEmployee = {
    name: '',
    phone: '',
    email: '',
    birthday: '',
    avatarURL: '',
    status: '',
    address: '',
  };

  constructor(private employeeService: EmployeeService) {}
  isChecked = false;
  isCheckedInit = false;
  ngOnInit(): void {}

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  };

  onSubmit(form) {
    console.log(form);

    const employee = {
      name: this.createEmployee.name,
      phone: this.createEmployee.phone,
      email: this.createEmployee.email,
      birthday: this.createEmployee.birthday,
      status: this.createEmployee.status,
      address: this.createEmployee.address,
    };

    this.employeeService.createEmployee(employee).subscribe((data) => {
      console.log(data);
    });
  }

  onChange(ob: MatSlideToggleChange) {
    console.log(ob.checked);
    if (ob.checked) {
      this.createEmployee.status = 'Enable';
    } else {
      this.createEmployee.status = 'Disable';
    }
    console.log(this.createEmployee.status);
  }
}
