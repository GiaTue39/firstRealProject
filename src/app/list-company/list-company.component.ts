import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  employee: number;
  orders: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Pencil Co.'    , employee: 5,  orders: '165/163'},
  {name: 'Color Tech'    , employee: 2,  orders: '78/47'},
  {name: 'Lithium Tech'  , employee: 7,  orders: '95/65'},
  {name: 'Beryllium Tech', employee: 9,  orders: '78/45'},
  {name: 'Boron Tech'    , employee: 10, orders: '23/20'},
  {name: 'Carbon Tech'   , employee: 12, orders: '67/45'},
  {name: 'Nitrogen Tech' , employee: 14, orders: '57/45'},
  {name: 'Oxygen Tech'   , employee: 15, orders: '25/14'},
  {name: 'Fluorine Tech' , employee: 18, orders: '45/33'},
  {name: 'Neon Tech'     , employee: 20, orders: '33/11'},
];


@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'employee', 'orders'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
