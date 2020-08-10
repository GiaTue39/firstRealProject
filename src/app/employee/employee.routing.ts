import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';

export const employeeRoutings = [
  { path: '', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: ':id', component: DetailEmployeeComponent },
];
