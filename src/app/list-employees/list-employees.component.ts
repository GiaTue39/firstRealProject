import { Component, OnInit } from '@angular/core';

export interface Employees {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  name: string;
  phone: string;
  email: string;
  status: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
const employee: Employees[] = [
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  {
    name: 'Huynh Gia Tue',
    phone: '0192121',
    email: 'giatue39@gmail.com',
    status: 'Enable',
  },
  {
    name: 'Le Thi Kim Truc',
    phone: '012122',
    email: 'kimtruc38@gmail.com',
    status: 'Enable',
  },
];

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];

  displayedColumns: string[] = ['name', 'phone', 'email', 'status'];
  dataSource = employee;

  constructor() {}

  ngOnInit(): void {}
}
