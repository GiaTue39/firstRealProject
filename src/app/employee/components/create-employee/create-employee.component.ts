import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { CreateEmployeeModel } from '../../models/createEmployee';
import { EmployeeService } from '../../services/employee.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { CreateEmployeeActions } from '../../actions';
import { Observable } from 'rxjs';
import {
  selectIsCreatedEmployees,
  selectEmployees,
  selectCreatingEmployee,
} from '../../selectors/create-employee.selector';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  @Output() change: EventEmitter<MatSlideToggleChange>;
  @ViewChild('form') form: NgForm;

  message: string;

  employees$: Observable<any>;
  isCreated$: Observable<boolean>;
  isCreating$: Observable<boolean>;
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
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private store: Store,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(selectEmployees));
    this.isCreated$ = this.store.pipe(select(selectIsCreatedEmployees));
    this.isCreating$ = this.store.pipe(select(selectCreatingEmployee));
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  };

  onSubmit(employee: NgForm) {
    const employeeModel = {
      ...employee.value,
      birthday: employee.value.birthday.toISOString(),
    };
    this.store.dispatch(
      CreateEmployeeActions.createEmployee({ employee: employeeModel })
    );
  }

  onChange(ob: MatSlideToggleChange) {
    this.createEmployee.status = ob.checked ? 'Enable' : 'Disable';
  }
}
