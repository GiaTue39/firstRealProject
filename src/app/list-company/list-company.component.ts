import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'employee', 'orders'];
  dataSource = [];
  dataS = new MatTableDataSource<Company>(this.dataSource);
  selection = new SelectionModel<Company>(true, []);
  isLoading = false;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.companyService.getCompanies().subscribe(
      (data) => {
        this.dataSource = data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }

    );
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Company): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    //return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  createCompany() {
    const company = {
      id: '7f5cef88-d15c-11ea-87d0-0242ac130003',
      name: 'Be Sight Soft',
      employee: '17',
      orders: '55/22'
    };
    this.companyService.createCompany(company).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
